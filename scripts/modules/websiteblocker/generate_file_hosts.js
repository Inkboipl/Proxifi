const hosts_Porn = async () => {
// Blacklisted Sites/Domains
const porn_domains = require('./domain_lists/porn_domains.json') //this will soon be a fetch request from the api

// NPM Modules Required To Perform Action
const fs = require('fs')

// Convert JSON Array into hosts's file format
var sites_porn = `127.0.0.1  theporndude.com`
porn_domains.domains.forEach(async (domain) => {
    console.log(`Added "${domain}"`)
    sites_porn = sites_porn + `\n127.0.0.1  ${domain}`
});

// Group of all domains/sites to block
var sites_all = `# NSFW sites begin\n${sites_porn}\n# If you are here you probably wanted to remove the plugin, no need to do that here! Just use the uninstalling function in the app, and remove everything safely.`

// Create hosts.txt
const path = `./scripts/modules/websiteblocker/temp/hosts`
fs.writeFile(path, sites_all, function (err) {
    console.log(err)
    if (err) return {response:`Failed. ${err}`}
    return {response:`Success`}
});
}
  
module.exports = { hosts_Porn }
