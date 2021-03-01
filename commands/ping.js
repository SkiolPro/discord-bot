const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

    message.channel.send(`**Latance du bot **${Date.now() - message.createdTimestamp}ms. **Latence de L'API **${Math.round(client.ws.ping)}ms`);
}

exports.help = {
  name: 'ping',
  aliases: ['bot'],
}