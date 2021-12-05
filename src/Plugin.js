const packageInfo = require("../package.json");
const ProxyRoutesHandler = require("./ProxyRoutesHandler");

class Plugin {
  constructor(core) {
    core.addRoutesHandler(ProxyRoutesHandler);
  }

  get displayName() {
    return packageInfo.name;
  }
}

module.exports = Plugin;
