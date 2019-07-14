const { RichEmbed } = require('discord.js');
const fs = require('fs');

exports.run = async (client, message) => {

  // just addressing each command. Could be done otherwise. (see previous commit).

  const embed = new RichEmbed()
    .setTitle('Command help')
    .addField('Public commands', 'b.help, b.hex, b.serverinfo, b.userinfo, b.verify')
    .addField('Moderation commands', 'b.ban, b.kick, b.warn, b.lockdown, b.mute')
    .setFooter('BeanBot © rokosz 2019')
    .setTimestamp()

  message.channel.send(embed);

}

module.exports.help = {
  name: 'help',
  description: 'displays the commands',
  useage: `b.`
}
