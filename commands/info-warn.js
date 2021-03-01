const Discord = require('discord.js')
const settings = require('../settings.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;


        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) warnings = 0;

        message.channel.send(`:white_check_mark: **${user.username}** a *${warnings}* warn(s)`);

}

exports.help = {
  name: 'info-warn',
  aliases: ['warn-info', 'warns'],
}