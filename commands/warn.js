const Discord = require('discord.js')
const settings = require('../settings.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")

const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

if(!user) return message.channel.send(":x: **Tu n'a pas mentionné cet utilisateur ou c'est un bot !**");

if(user.bot) return message.channel.send('**:x: Tu ne peux pas warn un bot !**');

if(message.author.id === user.id) return message.channel.send('**:x: Tu ne peux pas te warn toi même !**');

let reason = args.slice(1).join(" ");

if(!reason) reason = 'Pas spécifier !';

let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

if(warnings === 3) return message.channel.send(`${user} has already reached three warnings`);


if(warnings === null) {
    db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            
    user.send(`Tu as été warn sur ${message.guild.name} pour la raison : \`${reason}\``)

     message.channel.send(`**:white_check_mark:${user.username}** a été warn avec succès`)
        }

        if(warnings !== null){
            db.add(`warnings_${message.guild.id}_${user.id}`, 1)
            user.send(`Tu as été warn sur ${message.guild.name} pour la raison : \`${reason}\``)
            message.channel.send(`**:white_check_mark: ${user.username}** a été warn avec succès`)

}
}

exports.help = {
  name: 'warn',
  aliases: ['averti'],
}