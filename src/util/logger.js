const { RichEmbed } = require('discord.js');
const chalk = require('chalk');

module.exports = async(client, options) => {

  const auditChannel = (options && options.logChannel);

  client.on('guildMemberAdd', (member) => {

    let log = member.guild.channels.find(c => c.name === auditChannel);
    if(!log) return;

    let wE = new RichEmbed()
      .setTitle(`User Joined`)
      .setDescription(`User ${member} has joined`)
      .setColor('#4cd137')
      .setFooter(new Date())

    log.send(wE);

    console.log(chalk.blue(`[${member.guild}]`) +` ${member.user.username} has joined at ${new Date()}.`);

  });

  client.on('guildMemberRemove', (member) => {

    let log = member.guild.channels.find(c => c.name === auditChannel);
    if(!log) return;

    let lE = new RichEmbed()
      .setTitle(`User Left`)
      .setDescription(`User ${member} has left`)
      .setColor('#c23616')
      .setFooter(new Date())

    log.send(lE);

    console.log(chalk.blue(`[${member.guild}]`) +` ${member.user.username} has left at ${new Date()}.`);

  });

  client.on('guildMemberUpdate', (oldMember, newMember) => {

    let log = newMember.guild.channels.find(c => c.name === auditChannel)
    if(!log) return;

    const uC = new RichEmbed()
      .setTitle('Nickname Changed')
      .setDescription(`${newMember.id}`)
      .setColor('#3498db')
      .addField('Old Username', `**${oldMember.nickname}**`, true)
      .addField('New Username', `**${newMember.nickname}**`, true)
      .setFooter(new Date())

    log.send(uC);

  });

  client.on('messageUpdate', (oldMessage, newMessage) => {

    if(oldMessage.content == newMessage.content) return;

    let log = newMessage.guild.channels.find(c => c.name === auditChannel)
    if(!log) return;

    let uE = new RichEmbed()
      .setTitle("Edited message")
      .setColor("#9b59b6")
      .addField("Author", newMessage.author.tag, true)
      .addField("Channel", newMessage.channel, true)
      .addField("New-Message", newMessage.cleanContent)
      .addField("Old-Message", oldMessage.cleanContent)

    log.send(uE);
    console.log(chalk.yellow(`Logged an updated message from ${newMessage.author.id} at ${new Date()}.`));

  });

  client.on('messageDelete', (message) => {

    let log = message.guild.channels.find(c => c.name === auditChannel)
    if(!log) return;

    if(message.author.bot) return;

    let dE = new RichEmbed()
      .setTitle("**DELETED MESSAGE**")
      .setColor("#c0392b")
      .addField("Author Name: ", `${message.author.tag}`, true)
      .addField("Channel: ", `${message.channel}`, true)
      .addField("this dude", ` spilled these beans: ${message.content}`)
      .setFooter(`Message ID: ${message.id} | Author: ${message.author.id} | Deletion ${new Date()}`)

    log.send(dE);
    console.log(chalk.red(`logged a deleted message. By ${message.author.id}`));

  });

}
