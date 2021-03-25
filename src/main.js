//modulos
const {app, BrowserWindow, globalShortcut} = require('electron');
const path = require('path');
const url = require('url');

// ventanas
let mainWindow
let newElementWin

//creacion de la ventana
app.on('ready', () => {
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    mainWindow.webContents.openDevTools();
  });

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false
  })

  mainWindow.setMenu(null);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'html/index.html'),
    protocol: 'file',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    app.quit();
  })
});
