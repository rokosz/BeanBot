module.exports = function (client) {

client.on('userUpdate', (oldUser, newUser) => {

  const unameChange = null;
  const discrimChange = null;
  const avatarChange = null;

  client.guilds.forEach(function (guild, guildid) {

    guild.members.forEach(function (member, memberid) {

      let logs = member.guild.channels.find(c => c.name === 'logs');

      if(newUser.id == memberid) {

        if(oldUser.username != newUser.username) {

          const unameChangeEm = new RichEmbed()
            .setTitle('Username Changed')
            .setDescription(`${newUser.id}`)
            .setColor('#3498db')
            .addField('Old username', `**${oldUser.username}**`, true)
            .addField('New username', `**${newUser.username}**`, true)
            .setFooter(new Date())

        }

        if(oldUser.discriminator != newUser.discriminator) {

          const unameChangeEm = new RichEmbed()
            .setTitle('Discriminator Changed')
            .setDescription(`${newUser.id}`)
            .setColor('#3498db')
            .addField('Old Discriminator', `**${oldUser.discriminator}**`, true)
            .addField('New Discriminator', `**${newUser.discriminator}**`, true)
            .setFooter(new Date())

        }

        if(oldUser.avatar != newUser.avatar) {

          const avatarChangeEm = new RichEmbed()
            .setTitle('Avatar Changed')
            .setAuthor(`${newUser.tag}`)
            .setDescription(`<@${newUser.id}> - *${newUser.id}*`)
            .setColor('')
            .setFooter(`<@${newUser.id}> || *${newUser.id}*` + new Date())
            .setImage(oldUser.displayAvatarURL)

        }

        if(unameChange) {
          logs.send(unameChangeEm);
        }

        if(discrimChange) {
          logs.send(discrimChangeEm);
        }

        if(avatarChange) {
          logs.send(avatarChangeEm);
        }

      }

    })

  })

})

}
