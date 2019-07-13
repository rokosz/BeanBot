const { RichEmbed } = require('discord.js');
const fs = require('fs');

exports.run = async (client, message) => {

  fs.readdir(__dirname , (err, files) => {
     if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    var namelist = "";
    var desclist = "";
    var usage = "";

    let result = jsfiles((f, i) => {
        let props = require(`./${f}`);
        namelist = props.help.name;
        desclist = props.help.description;
        usage = props.help.usage;

        // send help text
        let helpembed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setFooter("Please report any bugs to Vati#1662")
        .setColor("RANDOM")
        .addField("Name:", namelist, true)
        .addField("Usage:", usage, true)
        .addField("Description:", desclist)

        message.author.sendEmbed(helpembed);
    });

   })

}

module.exports.help = {
  name: 'help',
  description: 'displays the commands',
  useage: `b./b!/-b help`
}
