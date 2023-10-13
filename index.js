const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const electron = require('electron'),
ipc = electron.ipcMain;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    titleBarOverlay:true,
    minHeight: 600,
    minWidth: 800,
    webPreferences:{
        nodeIntegration: true,
        enableRemoteModule: true,
        contextIsolation: false,
    }
  })

  ipc.on('closeWindow', (event, args) => {
    if(args === 'true'){
        win.hide()
        setTimeout(() => {
            console.log('.')
        }, 2000);
    }
});

  win.loadFile('renders/landing.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//Website blocker setup
const websiteblocker_actions = require('./scripts/modules/websiteblocker/!_actions')
ipc.on('module_websiteblocker_setup', async (event, args) => {
  if(args === 'true'){
      await websiteblocker_actions.setup()
  }
});
ipc.on('websiteblocker_setup_change', async (event, args) => {
  console.log(args)
});