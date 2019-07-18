const { RichEmbed } = require('discord.js');

module.exports = async (oldUser, newUser) => {

  let logs = newUser.guild.channels.find(c => c.name === 'logs');

  // TODO: setup database logging for discriminator changes.

  const discrimChange = new RichEmbed()
    .setTitle('Discriminator Changed')
    .setDescription(`${newUser.id}`)
    .setColor('')
    .addField('Old Discriminator', `**${oldUser.discriminator}**`, true)
    .addField('New Discriminator', `**${newUser.discriminator}**`, true)
    .setFooter(new Date())

  logs.send(discrimChange);

}
