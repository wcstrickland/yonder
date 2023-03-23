const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow(){
    const win = new BrowserWindow({
        width: 1000,
        height: 900,
        webPreferences: {
            plugins: true, 
            nodeIntegration: true, 
            contextIsolation: false,
            backgroundThrottling: false,
            webSecurity: false
        },
        icon : path.join(__dirname, '/yndr.ico')
    })
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