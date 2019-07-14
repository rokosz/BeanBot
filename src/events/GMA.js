const { RichEmbed } = require('discord.js');
const chalk = require('chalk'); // CLI coloring
const { timestamp, db } = require(__dirname + '/../config/config.js');

// database stuff

const sql = require('sqlite');
await sql.open(__dirname + '/../databases/db.sqlite');

// TODO: setup user database for people joining & clean it up.

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

  let beanWelcome = new RichEmbed()
    .setThumbnail(member.avatarURL)
    .setAuthor(member.id)
    .setDescription(`${member} has joined.`)
    .setFooter(`${timestamp} || ${member.id}`)

  introductions.send(beanWelcome);

  let member = message.guild.roles.find(role => r.name === "");
  

  console.log(chalk.blue(`[${member.guild}]`) +` ${member.user.username} has joined at ${timestamp}.`);

  // TODO: setup logging for adding and removing from database when action is called.

  sql.prepare("INSERT INTO users VALUES (?)").then(b => b.run([message.author.id]));

}
