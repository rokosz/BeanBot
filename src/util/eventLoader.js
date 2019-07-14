const bean = (event) => require(__dirname + `/../events/${event}`);

module.exports = (client) => {

  // TODO: set up logging funcitons

  client.on('ready', () => bean('ready')(client));
  client.on('guildMemberAdd', bean('GMA'));
  client.on('guildMemberRemove', bean('GMR'));

  // experimental
  client.on('messageUpdate', eventLoad('MU'));

}
