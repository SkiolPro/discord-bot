const Discord = require('discord.js')
const settings = require('../settings.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")


        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        let mutedchannel = client.channels.cache.get('802295027237650442');

        if(!user) return message.channel.send(":x: **Tu n'a pas mentionné cet utilisateur ou c'est un bot !**");

        if(user.bot) return message.channel.send('**:x: Tu ne peux pas warn un bot !**');

        if(user.id === message.author.id) return message.channel.send('**:x: Tu ne peux pas te clear tes warns toi même !**');

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if(warnings === null) return message.channel.send(`:x:**${user.username} n'a pas de warn**`);


        db.delete(`warnings_${message.guild.id}_${user.id}`);

        message.channel.send('**:white_check_mark: Warn supprimer avec succès !**')

}

exports.help = {
  name: 'delete-warn',
  aliases: ['suppr', 'supprime'],
}