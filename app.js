const Bean = require('discord.js');
const client = new Bean.Client({
  disableEveryone: true,
  autoReconnect: true,
  forceFetchUsers: true
});

const config = require(__dirname + '/config/config.js') // using __dirname + 'dirpath' to avoid directory issues

const sql = require('sqlite');
(async() => {

  // open and create a table if it doesn't exist.

  await sql.open(__dirname + '/src/databases/db.sqlite');
  await sql.run('CREATE TABLE IF NOT EXISTS `logs` (timestamp` TEXT)');
  await sql.run("CREATE TABLE IF NOT EXISTS `queries` ( `id` INTEGER )");
  await sql.run("CREATE TABLE IF NOT EXISTS `bans` ( `id` INTEGER )");
  await sql.run("CREATE TABLE IF NOT EXISTS `kicks` ( `id` INTEGER )");

})();

require(__dirname + '/src/handlers/commandHandler.js')(client);
require(__dirname + '/src/handlers/eventLoader.js')(client);

client.login(config.token);
