const { RichEmbed } = require('discord.js');

module.exports = async (banguild, banuser) => {

  let logs = newMember.guild.channels.find(c => c.name === 'logs');

  const banEm = new RichEmbed()
    .setDescription(`<@${banuser.id}> - ${banuser.id}`)
    .setColor()
    .setThumbnail(banuser.displayAvatarURL)
    .setFooter(new Date())
    .setTitle('user banned')
    .setAuthor(`banned user: ${banuser.tag}`)

  logs.send(banEm)

}
