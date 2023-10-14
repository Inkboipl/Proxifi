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
      
module.exports = { setup }