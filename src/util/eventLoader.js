const bean = (event) => require(__dirname + `/../events/${event}`);

module.exports = (client) => {

  // TODO: set up logging funcitons

  client.on('ready', () => bean('ready')(client));
  client.on('guildMemberAdd', bean('GMA'));
  client.on('guildMemberRemove', bean('GMR'));
  client.on('guildMemberUpdate', bean('UNC'));
  client.on('guildMemberUpdate', bean('UAC'));
  client.on('guildMemberUpdate', bean('UDC'));

  // experimental
  client.on('messageUpdate', eventLoad('MU'));
  client.on('messageDelete', eventLoad('MD'));

  /*
  client.on('channelCreate', eventLoad('CC'));
  client.on('channelDelete', eventLoad('CD'));
  */
}
