const { RichEmbed } = require('discord.js');

module.exports = async (oldUser, newUser) => {

  let logs = newUser.guild.channels.find(c => c.name === 'logs');
  if(oldUser.discriminator === newUser.discriminator) return;

  // TODO: setup database logging for discriminator changes.

  const discrimChange = new RichEmbed()
    .setTitle('Discriminator Changed')
    .setAuthor(`${newUser.tag}`)
    .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
    .setColor('')
    .addField('Old Discriminator', `**${oldUser.discriminator}**`, true)
    .addField('New Discriminator', `**${newUser.discriminator}**`, true)
    .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())

  if(oldUser.discriminator != newUser.discriminator) {

    logs.send(avatarChange).then(console.log(chalk.yellow(`${newUser.id} - ${newUser.username} has changed their avatar.`)));

    sql.prepare("INSERT INTO logs VALUES (?)").then(b => b.run([message.author.id]));

  }

}
