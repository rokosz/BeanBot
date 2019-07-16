const { RichEmbed } = require('discord.js');

module.exports = async (oldUser, newUser) => {

  if(oldUser.avatar === newUser.avatar) return;

  const avatarChange = new RichEmbed();
    .setTitle('Avatar Changed')
    .setAuthor(`${newUser.tag}`)
    .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
    .setColor('')
    .addField()
    .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())
    .setThumbnail(oldUser.displayAvatarURL)

  if(oldUser.avatar != newUser.avatar) {

    

  }

}
