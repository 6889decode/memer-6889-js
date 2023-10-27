<p align="center">
   <img src="https://img.shields.io/npm/dt/memer-api-js?style=for-the-badge">
   <img src="https://img.shields.io/npm/v/memer-api-js?style=for-the-badge">
   <img src="https://img.shields.io/github/stars/k4itrun/memer-api-js.svg?style=for-the-badge">
   <img src="https://img.shields.io/github/license/k4itrun/memer-api-js.svg?style=for-the-badge">
   <img src="https://img.shields.io/github/issues/k4itrun/memer-api-js.svg?style=for-the-badge">
   <a href="https://discord.gg/invite/kCdYrAJF8y"><br/><img src="https://badgen.net/discord/online-members/kCdYrAJF8y" alt="Discord"></a>
</p>

> **Memer-api-js is a robust module that makes image manipulation incredibly straightforward and efficient.**


### Installation

1. Get a free API Key at our 
2. Install the package using npm:
   ```sh
   npm install memer-api-js@latest
   ```
3. Configure your API key
```JS
const Meme = require("memer-api-js");
const memer = new Meme('Your Cool API Key');  // Obtained from Memer API Server
memer.<Method>(<Options>); // Returns a Promise with a <Buffer>
```


<!-- !! USAGE EXAMPLES !! -->
## Usage

```JS
const Meme = require("memer-api-js")
const Discord = require("discord.js")
const memer = new Meme('Your Cool API Token'); // Acquired from the Memer API Server

const avatar = "https://i.imgur.com/v3W9wMM.png"; // Please note that only static images are supported
const text = "Memer API is awesome!"

memer.youtube(avatar, 'Memer Api', text).then(image => {
    // This provides you with a 'Buffer', which you can use to create a Discord attachment
    
    var attachment = new Discord.AttachmentBuilder(image, {name:"youtube.png"});
    <channel>.send(attachment)
})
```
_For more examples and detailed usage, please refer to the [Documentation](https://memer-api-js.js.org)_


## LINKS

- 📃 Guide/Docs: [Documentation](https://memer-api-js.js.org/)
- 💬 Discord: [Server](https://discord.com/invite/kCdYrAJF8y)


## Features

- Super simple and easy to use.
- More than 50+ methods
- Easy to Implement.
- Great support and flexible.


<!-- !! LIMITS !! -->
## Ratelimits
The Memer API enforces a rate limit of one request every 5 seconds, allowing for one image request every 5 seconds. To bypass this limit, you can consider upgrading to a premium plan. 


<!-- !! ROADMAP !! -->
## Roadmap

For a list of proposed features and known issues, please visit the [open issues](https://github.com/k4itrun/Memer-API-js/issues) section.


<!-- !! CONTRIBUTING !! -->
## Contributing

Contributions are highly valued and greatly appreciated in the open-source community. If you'd like to contribute, please follow these steps:

1. Fork the Project
2. Create a Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- !! CONTACT !! -->
## Contact

Project Link: [Memer-Api-js GitHub](https://github.com/k4itrun/Memer-API-js)


<!-- !! CREDITS !! -->
## Credits
* [Base Images](https://github.com/DankMemer/imgen)
* [Wrapper base](https://github.com/Yash094/Memer-API)
