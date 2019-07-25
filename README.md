# BeanBot 🥣
An opensource security bot formed from the Discord.js API library. Includes logging and moderation features.

## Getting the bot setup ⚡
There are a few prerequisites you will need to change in order to run the bot.

### Bot token
Navigate into the [config](https://github.com/rokosz/BeanBot/blob/master/src/config/config.js) in your project and add in the keys to the following lines.
```js
const config = {
  "token": "your bot token here",
  "googleAPI": "Google API token here.",
}
```
### Exports ✅
Navigate into the [config](https://github.com/rokosz/BeanBot/blob/master/src/config/config.js) once more and edit the following lines only if you really need to. Add your support members.
```js
exports.prefixArray = ['b.', 'b!', '-b'];
exports.supportArray = ['userid array here'];
```
## Dependencies 📃 (don't kill me plz th0nx)
* **fs** - Partially used for the command handler
* [**SQLite**](https://www.npmjs.com/package/sqlite) - Primary database backend.
* [**chalk**](https://www.npmjs.com/package/chalk) - CLI coloring. Who can resist this?
* [**moment**](https://www.npmjs.com/package/moment) - Used for the timestamp
* [**util**](https://www.npmjs.com/package/util) - Using promisify for the command handler
* [**mongoose/MongoDB**](https://www.npmjs.com/package/mongoose) - Lighter easier backend database for low priority storage. Download MongoDB Compass to have this bit working properly.
## Developers 👦
* [**Jake 🐏**](https://github.com/rokosz) - Lead development
## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/rokosz/BeanBot/blob/master/LICENSE) file for details
