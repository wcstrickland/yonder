const {app, BrowserWindow} = require('electron')

const remoteMain = require("@electron/remote/main")
remoteMain.initialize()

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            plugins: true, 
            nodeIntegration: true, 
            contextIsolation: false,
            backgroundThrottling: false,
            webSecurity: false 
        }
    })
    remoteMain.enable(win.webContents)
    // win.loadURL('http://localhost:3000')
    win.loadURL(`${app.getAppPath()}/build/index.html`)
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
    if(process.platform !== "darwin"){
        app.quit()
    }
})

app.on('activate', function(){
    if(BrowserWindow.getAllWindows().length===0) createWindow()
})