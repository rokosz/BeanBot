const beanLoad = (event) => require(__dirname + `/../events/${event}`);

module.exports = (client) => {

  // TODO: set up logging funcitons

  client.on('ready', () => beanLoad('ready')(client));
  client.on('guildMemberAdd', beanLoad('GMA'));
  client.on('guildMemberRemove', beanLoad('GMR'));

}
