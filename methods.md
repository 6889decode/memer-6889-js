#  Methods
> list of methods used in memer api sp

## Youtube

```js
const Meme = require("memer-api-js");
const memer = new Meme();

const avatar = "https://i.imgur.com/v3W9wMM.png"; //only static images 
const text = "MEMER API IS AWESOME";
const username = "MEMER API";

memer.youtube(avatar, username, text).then(image => {
    //now you have a "BUFFER", for Discord create an attachment
      //const attachment = new Discord.AttachmentBuilder(image, { name: 'youtube.png' });
      //<Channel>.send({content:attachment})
})
```