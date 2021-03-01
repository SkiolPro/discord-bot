const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")
     var EMBED = new Discord.MessageEmbed()
    .setTitle("**Info du Serveur**")
    .addField("__**Nom du Server**__ 🎗️", `${message.guild.name}`)
    .addField("__**Fondateur du Serveur**__ 👑", `${message.guild.owner}`)
    .addField("__**Totals de Membres**__ 👥", `${message.guild.memberCount}`)
    .addField("__**Nombres de Roles**__ 🌀", `${message.guild.roles.cache.size}`)
    .addField("__**Région du Server**__ 🌍", `${message.guild.region}`)  
.addField("__**Serveur Créer En**__  📆 ", `${message.guild.createdAt.toLocaleString()}`)
.addField("__**Nombre de Boosts**__ ✨", `${message.guild.premiumSubscriptionCount}`)
.setColor("BLEUE")
.setFooter("Demander par :" + message.member.displayName, message.author.displayAvatarURL());
    message.channel.send(EMBED)
}
exports.help = {
  name: 'info',
  aliases: ['serveur'],
}