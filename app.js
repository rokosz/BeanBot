const Discord = require('discord.js');
const client = new Client({
  disableEveryone: true,
  autoReconnect: true,
  forceFetchUsers: true
});

const config = require(__dirname + '/config/config.js') // using __dirname + 'dirpath' to avoid directory issues

require(__dirname + '/src/handlers/commandHandler.js')(client);
require(__dirname + '/src/handlers/eventLoader.js')(client);

client.login(config.token);
