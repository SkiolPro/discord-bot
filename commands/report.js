const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send(" ❌ **Vous n'avez la permission requise !**")

    const target = message.guild.member(message.mentions.users.first())
    const reason = args.slice(1).join(' ');

    if (!target) return message.channel.send('❌ **Tu dois mentionné un utilisateur a report !**');
    if (!reason) return message.channel.send('❌ **Tu dois préciser la raison du report !**');

    message.channel.send(":white_check_mark: **Cet utilisateur a été report avec succès !**")

    var EMBED = new Discord.MessageEmbed()
        .setColor('0099ff')
        .setThumbnail(target.user.avatarURL)
        .addField('__**Membre Report**__', `${target.user.username}`)
        .addField('__**Report Par**__', `${message.author.username}`)
        .addField('__**Raison du Report**__', reason)
        .addField('__**Channel Du Message Report**__', message.channel)

    message.delete();
    client.channels.cache.get("802295027237650442").send(`${target} **a été report par** ${message.author} **pour la raison suivantes :** ${reason}`)
    client.channels.cache.get("802295027237650442").send(EMBED).then(msg => msg.react(":white_check_mark:"));
}

exports.help = {
  name: 'report',
  aliases: ['sanction'],
}