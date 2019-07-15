const { RichEmbed } = require('discord.js');
const chalk = require('chalk');

const sql = require('sqlite');
await sql.open(__dirname + '/../databases/db.sqlite');

module.exports.run = async (client, message, args) => {

  if(message.member.roles.some(r => ['', ''].includes(r.name))) {

    let bean = message.members.first();

    if(!member)
      return message.reply("No user supplied.");
    if(!member.bannable)
      return message.reply("Can't bean this person.");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason needed."

    member.ban().then((member) => {

      // TODO: setup logging and database blacklisting.
      sql.prepare("INSET INTO bans VALUES (?)").then(b => b.run([message.author.id]));
      console.log(chalk.yellow(`[${member.guild}]`) + `${member.user.username} was banned`);

    }).catch(() => {

      // TODO: same as above for failures (mod attempting mod/admin ban)

      console.log(chalk.yellow(`[${member.guild}]`) + `${member.user.username} is unbannable`);

    })

  }

}
