const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(" ❌ **Vous n'avez la permission requise")

  let role;
  if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first()
  if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){
    role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())

    if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.channel.send(":x: **Rôle introuvable !**")
  }
  if(args[0] && !isNaN(args[0])){
    role = message.guild.roles.cache.find(e => e.id == args[0])
    if(!message.guild.roles.cache.has(args[0])) return message.send(":x: **Rôle introuvable !**")
  }

  if(!role) return message.channel.send(":x: **Tu dois mentionn le rôle !**")
let rolemembers;
if(role.members.size > 20) rolemembers = role.members.map(e => `<@${e.id}>`).slice(0,20).join(", ") + ` and ${role.members.size - 20} more members...`
if(role.members.size < 20) rolemembers = role.members.map(e => `<@${e.id}>`).join(", ")

  let embed = new Discord.MessageEmbed()
  .setColor(role.color)
  .setAuthor(message.guild.name,message.guild.iconURL())
  .setDescription(`**Nom du rôle :**<@&${role.id}>\n\n**ID du rôle :** **\`${role.id}\`**\n\n**Rôle Mentionable :** ${role.mentionable.toString().replace("true","Oui").replace("false","Non")}\n\n**Membre avec le rôle:** ${role.members.size || 0}`)

  message.channel.send(embed)

}

exports.help = {
  name: 'info-role',
  aliases: ['grade', 'role'],
}