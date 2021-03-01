const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")
  let text = args.join(" ");
  message.delete();
  message.channel.send(text);
}

exports.help = {
  name: 'say',
  aliases: ['send', 'dit', 'dis'],
}