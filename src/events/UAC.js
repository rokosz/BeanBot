const { RichEmbed } = require('discord.js');

module.exports = async (oldUser, newUser) => {

  let logs = newUser.guild.channels.find(c => c.name === 'logs');
  if(oldUser.avatar === newUser.avatar) return;

  // TODO: setup database logging for avatar changes.

  const avatarChange = new RichEmbed()
    .setTitle('Avatar Changed')
    .setAuthor(`${newUser.tag}`)
    .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
    .setColor('')
    .addField()
    .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())
    .setThumbnail(oldUser.displayAvatarURL)

  if(oldUser.avatar != newUser.avatar) {

    logs.send(avatarChange).then(console.log(chalk.yellow(`${newUser.id} - ${newUser.username} has changed their avatar.`)));

  }

}
