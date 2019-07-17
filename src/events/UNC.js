const { RichEmbed } = require('discord.js');

module.exports = async (oldUser, newUser) => {

  let logs = newUser.guild.channels.find(c => c.name === 'logs');
  if(oldUser.username === newUser.username) return;

  // TODO: setup database logging for username changes.

  const unameChange = new RichEmbed()
    .setTitle('Username Changed')
    .setAuthor(`${newUser.tag}`)
    .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
    .setColor('')
    .addField('Old Username', `**${oldUser.username}**`, true)
    .addField('New Username', `**${newUser.username}**`, true)
    .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())

  if(oldUser.username != newUser.username) {

    logs.send(avatarChange).then(console.log(chalk.yellow(`${newUser.id} - ${newUser.username} has changed their avatar.`)));

    sql.prepare("INSERT INTO logs VALUES (?)").then(b => b.run([message.author.id]));

  }


}
