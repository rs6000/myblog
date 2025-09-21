@echo off
SETLOCAL ENABLEDELAYEDEXPANSION

REM -------------------------------
REM 設定 CMD 編碼為 UTF-8 避免亂碼
REM -------------------------------
chcp 65001 >nul

REM 取得專案根目錄
set PROJECT_DIR=%CD%
echo 專案目錄: %PROJECT_DIR%

REM -------------------------------
REM Step 1: 確認 package.json
REM -------------------------------
IF NOT EXIST "%PROJECT_DIR%\package.json" (
    echo 錯誤：找不到 package.json
    pause
    exit /b 1
)

REM -------------------------------
REM Step 2: SSH 檢查
REM -------------------------------
IF NOT EXIST "%USERPROFILE%\.ssh\id_ed25519.pub" (
    echo 錯誤：SSH 公鑰不存在
    pause
    exit /b 1
)
IF NOT EXIST "%USERPROFILE%\.ssh\known_hosts" type nul > "%USERPROFILE%\.ssh\known_hosts"
ssh-keyscan github.com >> "%USERPROFILE%\.ssh\known_hosts" 2>nul

SET SSH_OK=0
FOR /F "tokens=*" %%i IN ('ssh -T git@github.com 2^>^&1') DO (
    SET LINE=%%i
    echo !LINE!
    echo !LINE! | findstr /C:"successfully authenticated" >nul
    IF !ERRORLEVEL! EQU 0 SET SSH_OK=1
)
IF !SSH_OK! EQU 0 (
    echo SSH 連線失敗，請確認公鑰已加入 GitHub SSH keys
    pause
    exit /b 1
)

REM -------------------------------
REM Step 3: 切換 main 分支並提交修改
REM -------------------------------
git branch | findstr /C:"* main" >nul
IF ERRORLEVEL 1 git checkout main
git add .
git commit -m "Update website content" --allow-empty
git push origin main

REM -------------------------------
REM Step 4: Build Docusaurus
REM -------------------------------
call npm run build
IF NOT EXIST "%PROJECT_DIR%\build\index.html" (
    echo 錯誤：build 資料夾不存在
    pause
    exit /b 1
)

REM -------------------------------
REM Step 4.1: 備份 build
REM -------------------------------
for /f "tokens=1-4 delims=/ " %%a in ("%DATE%") do set DT=%%c%%a%%b
for /f "tokens=1-2 delims=: " %%x in ("%TIME%") do set TM=%%x%%y
set BACKUP_DIR=%PROJECT_DIR%\backup\build_!DT!_!TM!

mkdir "%BACKUP_DIR%"
xcopy /E /I /Y "%PROJECT_DIR%\build\*" "%BACKUP_DIR%" >nul
echo build 已備份: %BACKUP_DIR%

REM -------------------------------
REM Step 4.2: 保留最近 7 次備份
REM -------------------------------
set MAX_BACKUPS=7
pushd %PROJECT_DIR%\backup
set COUNT=0
for /f "tokens=*" %%F in ('dir /B /AD /O-D build_*') do (
    set /A COUNT+=1
    if !COUNT! gtr %MAX_BACKUPS% (
        rd /s /q "%%F"
        echo 刪除舊備份: %%F
    )
)
popd

REM -------------------------------
REM Step 5: 部署 gh-pages
REM -------------------------------
set TMP_DIR=%TEMP%\docusaurus-deploy
rmdir /s /q "%TMP_DIR%" 2>nul

REM 檢查 gh-pages 是否存在
git ls-remote --exit-code --heads git@github.com:rs6000/myblog.git gh-pages >nul 2>&1
IF ERRORLEVEL 1 (
    echo gh-pages 不存在，建立暫存 git repo
    mkdir "%TMP_DIR%"
    cd "%TMP_DIR%"
    git init
    git remote add origin git@github.com:rs6000/myblog.git
    git checkout -b gh-pages
) ELSE (
    git clone --branch gh-pages git@github.com:rs6000/myblog.git "%TMP_DIR%"
    cd "%TMP_DIR%"
)

REM 清理舊檔案
FOR /D %%d IN (*) DO (
    IF NOT "%%d"=="." IF NOT "%%d"==".." rd /s /q "%%d"
)
del /q *.* 2>nul

REM 複製最新 build
xcopy /E /I /Y "%PROJECT_DIR%\build\*" "%TMP_DIR%"

REM commit & force push
git add .
git commit -m "Deploy Docusaurus build" --allow-empty
git push origin gh-pages --force

REM -------------------------------
REM Step 6: 驗證與清理
REM -------------------------------
git fetch origin gh-pages
git ls-remote --exit-code --heads git@github.com:rs6000/myblog.git gh-pages >nul 2>&1
IF ERRORLEVEL 1 (
    echo gh-pages 推送失敗
    pause
    exit /b 1
)

cd /d "%PROJECT_DIR%"
rmdir /s /q "%TMP_DIR%"

echo 部署完成 ✅
@echo off
echo 網站: https://rs6000.github.io/myblog/
echo build 備份: %BACKUP_DIR%
echo %DATE% %TIME% - 部署完成 >> %PROJECT_DIR%\backup\deploy_log.txt

REM -------------------------------
REM 自動開啟瀏覽器並強制刷新
REM -------------------------------
set RAND=%RANDOM%
start "" "https://rs6000.github.io/myblog/?v=%RAND%"

pause
