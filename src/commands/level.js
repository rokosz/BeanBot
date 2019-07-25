const SQLite = require('better-sqlite3');
const sql = new SQLite(__dirname + '/../databases/score.sqlite');

module.exports.run = async (client, message) => {

  client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");

  let score;

  if(message.guild) {

    score = client.getScore.get(message.author.id, message.guild.id);

  }

  if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
  }

  return message.reply(`You currently have ${score.points} points and are level ${score.level}!`);

}
