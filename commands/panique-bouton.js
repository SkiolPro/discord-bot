const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")

message.channel.send(":white_check_mark: **Ton activation du Panique-Bouton à bien été prévenue au staff !**")

client.channels.cache.get("802295003795685387").send(`**Le panique-bouton à été activé par ${message.author} par conséquançe tous le staff est demander dans le salon réunion au plus vite ! 

Mention : <@&802295001970769930>**`)

}

exports.help = {
  name: 'panique-bouton',
  aliases: ['alerte'],
}