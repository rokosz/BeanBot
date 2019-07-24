const { RichEmbed } = require('discord.js');

module.exports = async (newUser, oldUser) => {

  let logs = newMember.guild.channels.find(c => c.name === 'uwu-lounge');

  const avatarChangeEm = new RichEmbed()
    .setTitle('Avatar Changed')
    .setAuthor(`${newUser.tag}`)
    .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
    .setColor('')
    .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())
    .setImage(oldUser.displayAvatarURL)

  logs.send(avatarChangeEm);

}
