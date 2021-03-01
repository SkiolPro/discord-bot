const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(" ❌ **Vous n'avez la permission requise")

const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

let reason = args.slice(1).join(' ');

if(!user) return message.channel.send("**:x: Tu n'a pas mentionné cet utilisateur ou c'est un bot !**");

if(!reason) return message.channel.send("**:x: Tu dois déclarer la raison du mp !**")

message.channel.send(":white_check_mark: **Cet utilisateur à été avertit de votre message**")

user.send(`Tu as été convoqué par ${message.author} sur ${message.guild.name} pour la raison : \`${reason}\``)
message.author.send()

}

exports.help = {
  name: 'mp',
  aliases: ['dm', 'demande'],
}