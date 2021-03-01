const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

    if (!args[0]) return message.channel.send("** :x: Tu ne m'as pas dit combien de message je devais supprimer :/**")
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`**Je t'ai supprimer ${args[0]} messages :D**`);
      message.delete(1000);
    })
}

exports.help = {
  name: 'clear',
  aliases: ['purge', 'prune'],
}