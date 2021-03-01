const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {
    
    let mentioned = message.mentions.members.first() || message.member; 

    let embed = new Discord.MessageEmbed()
    embed.setColor("0099ff") 
    embed.setTitle(`Avatar de :   **` + `${mentioned.user.username}` + "**") 
    embed.setImage(mentioned.user.displayAvatarURL( {size: 1024, dynamic: true } )) 
    embed.setFooter("demandé par : " + message.member.displayName, message.author.displayAvatarURL());
    return message.channel.send(embed)
}
    
exports.help = {
  name: 'avatar',
  aliases: ['logo', 'ava', 'personnage', 'perso'],
}