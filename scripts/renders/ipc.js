function ipcSend(event, args){
    const ipc = require('electron').ipcRenderer;
    ipc.send(event,args);
}