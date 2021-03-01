const Discord = require('discord.js')
const settings = require('../settings.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (!message.member.permissions.has("MANAGE_MESSAGES"))

message.channel.send(":x: **Vous n'avez pas les permissions reqise !**");

if(!args[0]) return message.channel.send('** :x: Veuillez préciser un nouveau prefix !**');

if(args[1]) return message.channel.send(':x: **Tu ne peux pas mettre des èspaces dans le prefix !**');

db.set(`prefix_${message.guild.id}`, args[0])

message.channel.send(`**:white_check_mark: **Succès du changement du prefix en :** **${args[0]}**`)
}

exports.help = {
  name: 'setprefix',
 aliases: ['prefix'],
}