const { RichEmbed } = require('discord.js');
const { timestamp } = require(__dirname + '/../config.config.js');

module.exports.run = async (client, message) => {

  if(message.member.roles.some(r => ['verified', 'admin', 'member', 'moderator'].includes(r.name))) return;

  let verificationID = message.guild.roles.find(role => r.name === "verification");
  let logs = member.guild.channels.find(c => c.name === 'introductions');
  if(!logs) return message.reply('the logging channel does not exist.');

  let verified = new RichEmbed();
    .setTitle('Verified')
    .setAuthor(message.author.id)
    .setDescription('if you recieved this you have been verified.')
    .setFooter(timestamp)

  let roleLog = new RichEmbed();
    .setTitle('verification')
    .setAuthor(message.author.id)
    .setDescription(`${message.author.tag} has been given the role ${verificationID}`)
    .setFooter(timestamp);

  message.member.addRole(verificationID)
    .then(message.author.send(verified))
    .then(logs.send(roleLog));

    // TODO: setup database logging for each verified member; this coincides with the unverified members.


}
