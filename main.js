// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 680,
        minWidth: 640,
        minHeight: 640,
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#1B1D23',
            symbolColor: '#9da5b4',
        },
        backgroundColor: '#282c34',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('./src/index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.