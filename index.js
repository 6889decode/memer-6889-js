const Memer = require('./lib/memer-api.js');
const { version } = require('./package.json');

function Meme(token) {
  return new Memer(token);
}

Meme.Memer = Memer;
Meme.version = version;

module.exports = Meme;
