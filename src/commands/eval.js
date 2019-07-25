const Discord = require("discord.js");
const config = require("../../config/config.js");

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

module.exports.run = async(client, message) => {
  const args = message.content.split(" ").slice(1);

  const whitelist = [
    ''
  ]

  if(whitelist.includes(message.author.id)) {

    if(message.content.includes(`client.token`)) {
         const no = new Discord.RichEmbed()
           .setImage(`https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif`)
           .setColor(0x12345)
         return message.channel.send(no);
       }
       if(message.content.includes(`config.token`)) {
         const no = new Discord.RichEmbed()
           .setImage(`https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif`)
           .setColor(0x12345)
         return message.channel.send(no);
       }
       if(message.content.includes(`config`)) {
         const no = new Discord.RichEmbed()
           .setImage(`https://media.giphy.com/media/nR4L10XlJcSeQ/giphy.gif`)
           .setColor(0x12345)
         return message.channel.send(no);
       }

    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  } else {return;}
}
