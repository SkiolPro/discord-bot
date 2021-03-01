const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(" ❌ **Vous n'avez la permission requise")

if(!args[0]) return message.channel.send(":x: **Tu dois écrire ta question !**")
    if(args[0].length < 1) return message.channel.send(":x: **Tu dois écrire ta question !**")


    let reponse = ["Oui.","Non.","Peut être...","Peut être que non.","Peut être que oui.", "Surement oui", "Surement non", "Oui à 50%"]
    let y = i[Math.floor(i.length * Math.random())]

    message.channel.send(`**Reponse** : **${reponse}**`)

}

exports.help = {
  name: '8ball',
  aliases: ['question'],
}