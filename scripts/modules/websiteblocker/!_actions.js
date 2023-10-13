const setup = async () => {
    //require functions
    const { hosts_Porn } = require('./generate_file_hosts')
    const wait = require('node:timers/promises').setTimeout;

    //run functions in order
    hosts_Porn()
    //await wait(1000)
}
      
module.exports = { setup }