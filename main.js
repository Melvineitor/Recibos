const { app, BrowserWindow } = require('electron');
function createWindow() {
    let win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: { nodeIntegration: true }
    });
    win.loadURL('http://localhost:7211/api/Recibos'); // Open the local API
}
app.whenReady().then(createWindow);