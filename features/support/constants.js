let config = require('konfig')({path: './config'})

module.exports = {
    headlessMode: config.properties.headlessMode,
    baseUrl: config.properties.baseUrl,
    mainbaseUrl: config.properties.mainbaseUrl,
    pageTimeout: config.properties.pageTimeout,
    chromiumpath: config.properties.chromiumPath
}