const Discord = require('discord.js');
const client = new Client();

const config = require(__dirname + '/config/config.json') // using __dirname + 'dirpath' to avoid directory issues

require(__dirname + '/src/handlers/command.js')(client);

client.login(config.token);
