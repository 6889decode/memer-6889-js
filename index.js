// Import the Memer library and package version
const Memer = require('./lib/memer-api.js');
const { version } = require('./package.json');

function Meme(token) {
  // Create instance
  const i = new Memer(token);
  
  // Assigns the Memer and version properties
  i.Memer = Memer;
  i.version = version;
  return i;
}

// Export function for use
module.exports = Meme;
