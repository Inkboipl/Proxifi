const injectHostsFile = async () => {
    const { execFile } = require('child_process');

    execFile(__dirname + '/Proxifi_PornBlocker.bat', (error, stdout, stderr) => {
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
      
module.exports = { injectHostsFile }