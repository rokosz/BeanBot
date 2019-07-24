const bean = (event) => require(__dirname + `/../events/${event}`);

module.exports = (client) => {

  // TODO: clean all of the logging into a single file for logs.

  client.on('ready', () => bean('ready')(client));
  client.on('guildMemberAdd', bean('GMA'));
  client.on('guildMemberRemove', bean('GMR'));
  client.on('guildMemberUpdate', bean('UNC'));

  client.on('guildBanAdd', bean('GBA'));
  client.on('guildBanRemove', bean('GBR'));
  client.on('userUpdate', bean('UAC'));

  // experimental

  client.on('messageUpdate', eventLoad('MU'));
  client.on('messageDelete', eventLoad('MD'));

  /*
  client.on('channelCreate', eventLoad('CC'));
  client.on('channelDelete', eventLoad('CD'));
  */

}
