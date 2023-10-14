const setup = async () => {
    //require functions
    const { hosts_Porn } = require('./generate_file_hosts')
    const { injectHostsFile } = require('./open_hosts_injector')
    const wait = require('node:timers/promises').setTimeout;

    //run functions in order
    hosts_Porn()
    await wait(3000)
    injectHostsFile()
}

const disable = async () => {
    const { execFile } = require('child_process');

    execFile(__dirname + '/Proxifi_DisablePornBlocker.bat', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
    
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
    
      console.log(`stdout:\n${stdout}`);
    });
}
      
module.exports = { setup, disable }