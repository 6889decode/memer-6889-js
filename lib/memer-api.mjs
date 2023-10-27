const base = "https://memer-api-sp.onrender.com/api/v1";
import fetch from 'node-fetch';

/**
 * Mmemer API Memes Generator
 * @example const Meme = require("memer-api");
 * const memer = new Meme('Your Cool API Token');
 * 
 * memer.youtube("./image.png", "Memer API", "A Youtube Comment")
 *  .then(youtube => {
 *      const attachment = new Discord.MessageAttachment(youtube, "youtube.png");
 *  })
 */

class Memer {
  constructor(token) {
    if (!token) throw new TypeError('Memer API Token was not provided!');
    this.token = token;
  }

  /**
  * Generates a Youtube Comment.
  * @param {string} avatar Avatar URL to Generate youtube comment
  * @param {string} username Username  of the user to Generate youtube comment
  * @param {string} text Text to Generate youtube comment
  * @returns {Promise<Buffer>}
  */
  async youtube(avatar, username, text) {
    if (!avatar) throw new SyntaxError('You are missing the Avatar');
    if (!username) throw new SyntaxError("You are Missing the USERNAME");
    if (!text) throw new SyntaxError('You are missing the Text');

    return new Promise((resolve, reject) => {
      fetch(encodeURI(`${base}/youtube?avatars=${avatar}&usernames=${username}&text=${text}&token=${this.token}`))
        .then((data) => {
          //send data back
          resolve(data.buffer());
        })
        .catch(error => {
          //if error reject the error
          reject(error);
        });
    });
  }
}

export { Memer as default };
