const Discord = require('discord.js')
const settings = require('../settings.json')
const ms = require('ms')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")
        
        let user = message.mentions.members.first();
        let time = args[1]
        let reason = args.slice(2).join(' ');
        let mutedchannel = client.channels.cache.get('802295027237650442'); 

        let mutedrole =  message.guild.roles.cache.get("802295031708516352");
    
        if(!user) return message.channel.send("**:x: Tu dois mentionné un utilisateur a mute !**");
        if(!time) return message.channel.send("**:x: Tu dois déclarer un temps de mute !**");
        if(!reason) return message.channel.send("**:x: Tu dois déclarer la raison du mute !**")
        console.log("test")

        if(message.guild.owner.id === user.id) return message.channel.send('**:x: Tu ne peux pas mute le créateur du serveur !**');

        user.send(`Tu as été mute sur ${message.guild.name} pour la raison : \`${reason}\``)
message.author.send()

     let m = new Discord.MessageEmbed

        .setColor('0099ff')
        .addField('__**Membre Mute**__', `${target.user.username}`)
        .addField('__**Mute Par**__', `${message.author.username}`)
        .addField('__**Raison du Mute**__', reason)
        .addField('__**Channel Du Mute**__', message.channel)
    
        
        user.roles.add(mutedrole);

        setTimeout(function(){

            user.roles.remove(mutedrole);

        }, ms(time));

        mutedchannel.send(m);
}

exports.help = {
  name: 'mute',
  aliases: ['gmute', 'tempmute', 'gtempmute'],
}