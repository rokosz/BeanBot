const { RichEmbed } = require('discord.js');
const chalk = require('chalk'); // CLI coloring
const { timestamp, db } = require(__dirname + '/../config/config.js');

// database base functions for removing

const sql = require('sqlite');
await sql.open(__dirname + '/../databases/db.sqlite');

// TODO: setup user database for people joining.

module.exports = async member => {

  let introductions = member.guild.channels.find(c => c.name === 'introductions');
  if(!introductions) {
    server.createChannel("introductions", "text")
      .then(channel => {
        let category = server.channels.find(c => c.name == "" && c.type == "category");

        if(!category) throw new Error("Not a valid category");
        channel.setParent(category.id);
      }).catch(console.error);
  }

  let beanRemove = new RichEmbed()
    .setThumbnail(member.avatarURL)
    .setAuthor(member.id)
    .setDescription(`${member} has left.`)
    .setFooter(`${timestamp} || ${member.id}`)

  introductions.send(beanRemove);

  console.log(chalk.red(`[${member.guild}]`) +` ${member.user.username} has left at ${timestamp}.`);

  // TODO: setup logging for adding and removing from database when action is called.

  sql.prepare("DELETE FROM queries WHERE id = ?").then(b => b.run([member.id]));

}
