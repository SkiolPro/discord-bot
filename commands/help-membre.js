const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")
    let mentioned = message.mentions.members.first() || message.member;
    
    let embed = new Discord.MessageEmbed()
    
    embed.setColor("0099ff")
    
    embed.setTitle(`**Commande Pour Les Membres**`)
    
    embed.setDescription("*Voici toutes les commandes que tu peux retrouver sur le bot en tant que membre. N'oubliez pas que le prefix est : !*")

   embed.addField("__**Commande d'avatar**__", "```!avatar @user```", true)

   embed.addField("__**Commande d'info du serveur**__", "```!info```", true)

    embed.addField("__**Commande de ping**__", "```!ping```", true)

    embed.addField("__**Commande 8ball**__", "```!8ball (ta question)```", true)

    embed.addField("__**Commande de crush**__", "```!crush (ta / ton crush)```", true)

        return message.channel.send(embed);
}

exports.help = {
  name: 'help-membre',
  aliases: ['membre'],
}