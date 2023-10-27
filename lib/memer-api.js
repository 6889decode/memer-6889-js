const base = 'https://memer-api-sp.onrender.com/api/v1';
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
/**
 * Memer API - Meme Generator
 * @example 
 * const MemerAPI = require("memer-api-js");
 * const memer = new MemerAPI('Your_API_Token');
 * 
 * memer.youtube("https://example.com/avatar.png", "User123", "A hilarious YouTube comment")
 *   .then(youtube => {
 *     // You can use the generated meme here
 *     const attachment = new Discord.MessageAttachment(youtube, "youtube.png");
 *   })
 *   .catch(error => {
 *     // Handle any errors here
 *     console.error("Error generating meme:", error);
 *   });
 */
class Memer {
  constructor(token) {
    if (!token) {
      throw new TypeError('Memer API Token was not provided!');
    }
    this.token = token;
    this.base = base
  }
  /**
    * Generates a Youtube Comment.
    * @param {string} avatar Avatar URL to Generate youtube comment
    * @param {string} username Username  of the user to Generate youtube comment
    * @param {string} text Text to Generate youtube comment
    * @returns {Promise<Buffer>}
    */
  async youtube(avatar, username, text) {
    if (!avatar) {throw new SyntaxError('Avatar is missing')}
    if (!username) {throw new SyntaxError('Username is missing')}
    if (!text) {throw new SyntaxError('Text is missing')}

    const url = `${this.base}/youtube?avatars=${avatar}&usernames=${username}&text=${text}&token=${this.token}`;

    try {
      const response = await fetch(encodeURI(url));
      if (response.ok) {
        return response.buffer();
      } else {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Memer;
