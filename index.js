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
          win.close()
        }, 10000);
    }
});

const Settings = require('./usersettings.json')
if(Settings.UserCompletedSetup === "true"){
  return win.loadFile('renders/loading.html')
} 

win.loadFile('renders/landing.html')
}

function createAlphaAlertWindow () {
  const win = new BrowserWindow({
    width: 200,
    height: 300,
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

  win.loadFile('')
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
ipc.on('module_websiteblocker_disable', async (event, args) => {
  if(args === 'true'){
      await websiteblocker_actions.disable()
  }
});

//Open link
const openLink = require('./scripts/app/openLink')
ipc.on('openlink', async (event, args) => {
  openLink(args)
});

//Setting changes
const fs = require('fs')
ipc.on('editSetting_UserCompletedSetup', async (event, args) => {
  const fileName = './usersettings.json';
  const file = require(fileName);
      
  file.UserCompletedSetup = args;
      
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
  });
});
ipc.on('editSetting_WebsiteBlockerEnabled', async (event, args) => {
  const fileName = './usersettings.json';
  const file = require(fileName);
      
  file.WebsiteBlockerEnabled = args;
      
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
  });
});

//Discord rpc
const DiscordRPC = require('discord-urpc');
const uRPC = new DiscordRPC({ clientID: '1162786989309972560', debug: true });
 
uRPC.on('ready', () => {
    const args = {
        pid: process.pid,
        activity: {
            state: 'Learn more @ filtru.xyz',
            assets: {
                large_image: 'logo',
                large_text: 'Tools and apps to fight against pornography',
            },
            // party,
            // secrets,
            instance: false
        }
    };
 
    uRPC.send('SET_ACTIVITY', args);
});