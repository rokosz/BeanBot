const { RichEmbed } = require('discord.js');

module.exports = async (oldMember, newMember) => {

  let logs = newMember.guild.channels.find(c => c.name === 'uwu-lounge');

  // TODO: setup database logging for username changes.

  const unameChange = new RichEmbed()
    .setTitle('Nickname Changed')
    .setDescription(`${newMember.id}`)
    .setColor('#3498db')
    .addField('Old Nickname', `**${oldMember.nickname}**`, true)
    .addField('New Nickname', `**${newMember.nickname}**`, true)
    .setFooter(new Date())

  logs.send(unameChange);

}
