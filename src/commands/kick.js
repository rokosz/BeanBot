const { RichEmbed } = require('discord.js');
const chalk = require('chalk');
const { timestamp } = require('/../config/config.js');

const sql = require('sqlite');
await sql.open(__dirname + '/../databases/db.sqlite');

module.exports.run = async (client, message, args) => {

  if(message.member.roles.some(r => ['', ''].includes(r.name))) {

    let bean = message.members.first();

    if(!member)
      return message.reply("No user supplied.");
    if(!member.kickable)
      return message.reply("Can't bean this person.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason needed."

    const kE = new RichEmbed();
      .setTitle('User kicked')
      .setAuthor(member.user.username)
      .addField('reason', reason)
      .setFooter(timestamp)


    member.kick().then((member) => {

      // TODO: setup logging and database blacklisting.

      message.channel.send(kE);

      sql.prepare("INSET INTO kicks VALUES (?)").then(b => b.run([message.author.id]));
      console.log(chalk.yellow(`[${member.guild}]`) + `${member.user.username} was kicked`);

    }).catch(() => {

      // TODO: same as above for failures (mod attempting mod/admin ban)

      message.channel.send('user unbannable');
      console.log(chalk.yellow(`[${member.guild}]`) + `${member.user.username} is unkickable`);

    });

  }

}
