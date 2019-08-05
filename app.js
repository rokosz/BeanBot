const Bean = require('discord.js');
const client = new Bean.Client({ disableEveryone: true });

const config = require(__dirname + '/config/config.js') // using __dirname + 'dirpath' to avoid directory issues
const logger = require(__dirname + '/src/util/logger');

logger(client, {
  logChannel: 'logs' // set your logging channel here.
});

require(__dirname + '/src/handlers/commandHandler.js')(client);
require(__dirname + '/src/handlers/eventLoader.js')(client);

client.login(config.token);
