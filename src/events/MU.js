const { RichEmbed } = require('discord.js');

module.exports = async (newMessage, oldMessage) => {

  if(newMessage.content === oldMessage.content) return;
  let logs = newMessage.guild.channels.find(c => c.name === 'logs');

  const messageUpdate = new RichEmbed();
    .setTitle('Message Updated.')
    .setAuthor(`${newMessage.author.tag}`)
    .setDescription(`<@${newMessage.author.id}> - *${newMessage.author.id}*`)
    .setColor('')
    .addField('Old content', `**${oldMessage.content}**`, true)
    .addField('New content', `**${newMessage.content}**`, true)
    .setFooter(`<@${newMessage.author.id}> || *${newMessage.author.id}*` + new Date())

  if(newMessage.content != oldMessage.content) {

    logs.send(messageUpdate).then(console.log(chalk.yellow(`${newMessage.author.id} - ${newMessage.author.username} has changed their avatar.`)));

    sql.prepare("INSERT INTO logs VALUES (?)").then(b => b.run([newMessage.author.id]));

  }

}
