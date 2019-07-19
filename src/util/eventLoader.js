const bean = (event) => require(__dirname + `/../events/${event}`);

module.exports = (client) => {

  // TODO: clean all of the logging into a single file for logs.

  client.on('ready', () => bean('ready')(client));
  client.on('guildMemberAdd', bean('GMA'));
  client.on('guildMemberRemove', bean('GMR'));
  client.on('guildMemberUpdate', bean('UNC'));

/*
  client.on('guildMemberUpdate', bean('UAC')); @error { logging when user also updates nick }
  client.on('guildMemberUpdate', bean('UDC')); @errpr { logging when user also updates nick/discrim/ava }
*/

  // experimental

  client.on('messageUpdate', eventLoad('MU'));
  client.on('messageDelete', eventLoad('MD'));

  /*
  client.on('channelCreate', eventLoad('CC'));
  client.on('channelDelete', eventLoad('CD'));
  */

}
