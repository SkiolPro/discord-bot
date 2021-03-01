const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")
    let mentioned = message.mentions.members.first() || message.member;
    
       let embed = new Discord.MessageEmbed()
    
    embed.setColor("0099ff")
    
    embed.setTitle(`**Commande Pour Les Admins **`)
    
    embed.setDescription("*Voici toutes les commandes que tu peux retrouver sur le bot. N'oubliez pas que le prefix est : !*")
    
    embed.addField("__**Commande de ban**__", "```!ban @user (raison)```", true)
    
    embed.addField("__**Commande de kick**__", "```!kick @user (raison)```", true)

    embed.addField("__**Commande de Warn**__", "```!warn @user (raison)```", true)
    
    embed.addField("__**Commande de Info Warn**__", "```!info-warn @user```", true)
    
    embed.addField("__**Commande de Delete Warn**__", "```!delete-warn @user```", true)
    
    embed.addField("__**Commande de Report**__", "```!report @user (raison)```", true)

    embed.addField("__**Commande d'add role**__", "```!add @user (role)```", true)

    embed.addField("__**Commande de delete role**__", "```!remove @user (role)```", true) 

    embed.addField("__**Commande de d'info role**__", "```!role (role)```", true)
        
        
    embed.addField("__**Commande de Mute**__", "```!mute @user (raison)```", true)
        
    embed.addField("__**Commande de clear**__", "```!clear (nombre de message)```", true)
        
    embed.addField("__**Commande de say**__", "```!say (ton message)```", true)

    embed.addField("__**Commande d'annoce**__", "```!annonce (ton message)```", true)
            
    embed.addField("__**Commande de SetPrefix**__", "```!setprefix (ton nouveau prefix)```", true)
    
    return message.channel.send(embed);
}

exports.help = {
  name: 'help-admin',
  aliases: ['admin'],
}