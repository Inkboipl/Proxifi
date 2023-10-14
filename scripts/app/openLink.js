const openLink = async (url) => {
    const open = require('open');
    open(url)
}
      
module.exports = { openLink }