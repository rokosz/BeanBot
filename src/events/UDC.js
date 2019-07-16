const { RichEmbed } = require('discord.js');

module.exports = async (oldUser, newUser) => {

  if(oldUser.discriminator === newUser.discriminator) return;

  const discrimChange = new RichEmbed();
    .setTitle('Discriminator Changed')
    .setAuthor(`${newUser.tag}`)
    .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
    .setColor('')
    .addField('Old Discriminator', `**${oldUser.discriminator}**`)
    .addField('New Discriminator', `**${newUser.discriminator}**`)
    .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())

  if(oldUser.discriminator != newUser.discriminator) {



  }

}
