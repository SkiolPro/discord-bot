const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

       if (!message.member.hasPermission('BAN_MEMBERS'))
      return message.channel.send(" :x: **Vous n'avez la permission requise !**")

       else {
        message.guild.fetchBans().then(bans=> {
        if(bans.size == 0) return 
        let bUser = bans.find(b => b.user.id == args)
        if(!bUser) return
        message.guild.members.unban(bUser.user)

        return message.channel.send(":white_check_mark: **Cet utilisateur à été unban avec succès !**")

              user.send(`Tu as été unban du serveur ${message.guild.name} par ${message.author} pour la raison : \`${reason}\``)
message.author.send()

      })
    }

}

exports.help = {
  name: 'unban',
  aliases: ['gunban'],
}