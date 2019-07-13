const fs = require('fs');
const util = require('util');
const Discord = require('discord.js')
const promisify = util.promisify;
const readdir = promisify(fs.readdir);
const chalk = require('chalk');

module.exports = (client) => {

  fs.readdir(__dirname + '/../commands/', (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === 'js')
    if (jsfile.length <= 0) {
      console.log(chalk.red('Couldn\'t find commands.'));
      return
    }

    jsfile.forEach((files, i) => {
      let props = require(`../commands/${files}`);
      console.log(chalk.magenta('[MODERATION] ') + files + ` has been loaded.`);
      client.commands.set(props.help.name, props);
    })
  });

  client.on('message', (message) => {

    const config = require(__dirname + '/../../config/config.js');

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (!cmd.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args);

  });

};
