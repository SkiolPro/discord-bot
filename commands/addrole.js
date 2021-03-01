const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(" ❌ **Vous n'avez la permission requise")

    let role;
    if(args[1] && isNaN(args[1])) role = message.mentions.roles.first()
    if(args[1] && !isNaN(args[1])){
        role = message.guild.roles.cache.get(args[1])
    }
    let user;
    if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if(args[0] && !isNaN(args[0])){
        user = client.users.cache.get(args[0])

        if(!message.guild.members.cache.has(args[0])) return message.channel.send("User not found")
    }
    if(!user) return message.channel.send(":x: **Tu dois mentionné un utilisateur à ajouter le role !**")
    if(!role) return message.channel.send(":x: **Tu dois mentionné le role à ajouter à cet utilisateur !**")
if(message.guild.members.cache.get(user.id).roles.cache.has(role.id)) return message.send(":x:")
    message.guild.members.cache.get(user.id).roles.add(role.id).catch(e => message.send(e))
    message.channel.send(":white_check_mark: **Le grade a été ajouter avec succès !**")

}

exports.help = {
  name: 'addrole',
  aliases: ['add', 'role'],
}