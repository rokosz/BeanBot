const { RichEmbed } = require('discord.js');

module.exports = async (oldUser, newUser) => {

  if(oldUser.username === newUser.username) return;

  // TODO: setup database logging for username changes.
    
  const unameChange = new RichEmbed();
    .setTitle('Username Changed')
    .setAuthor(`${newUser.tag}`)
    .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
    .setColor('')
    .addField('Old Username', `**${oldUser.username}**`)
    .addField('New Username', `**${newUser.username}**`)
    .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())

  if(oldUser.username != newUser.username) {



  }


}
