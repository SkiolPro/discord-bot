const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")

const reason = args.join(' ');

if (!reason) return message.channel.send('❌ **Tu dois préciser le message à envoyé !**');

message.channel.send(":white_check_mark: **Ton annoce à bien été envoyé !**")

message.delete()
client.channels.cache.get("802295003795685387").send(`${reason}`)

}

exports.help = {
  name: 'annonce',
  aliases: ['an'],
}