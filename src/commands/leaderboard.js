const SQLite = require('better-sqlite3');
const sql = new SQLite(__dirname + '/../databases/score.sqlite');

module.exports.run = async (client) => {

  const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 10;").all(message.guild.id);

  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("Our top 10 spammers")
    .setColor(0x00AE86);

  for(const data of top10) {
    embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }

  return message.channel.send({embed});
  
}
