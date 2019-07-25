const { RichEmbed } = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message) => {

  // just addressing each command. Could be done otherwise. (see previous commit).

  const embed = new RichEmbed()
    .setTitle('Command help')
    .addField('Public commands', 'b.help, b.hex, b.serverinfo, b.userinfo, b.verify, b.level, b.leaderboard')
    .addField('Moderation commands', 'b.ban, b.kick, b.warn, b.lockdown, b.mute, b.eval')
    .setFooter('BeanBot © rokosz 2019')
    .setTimestamp()

  message.channel.send(embed);

}
