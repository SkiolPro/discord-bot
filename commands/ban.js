const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {
  
  const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

         
        let reason = args.slice(1).join(' ');

        let toBan = message.mentions.members.first();
        let mutedchannel = client.channels.cache.get('802295027237650442');

        if(!user) return message.channel.send("**:x: Tu n'a pas mentionné cet utilisateur ou c'est un bot !**");
 
         if(message.author.id === user.id) return message.channel.send('**:x: Tu ne peux pas te ban toi même !**');

        if(message.guild.owner.id === user.id) return message.channel.send('**:x: Tu ne peux pas ban le créateur du serveur !**');

        if(user.bot) return message.channel.send('**:x: Tu ne peux pas ban un bot !**');

        if(!reason) return message.channel.send('**:x: Tu dois spécifier la raison du ban !**');

        if(!toBan.bannable){
            return message.channel.send(':x: **Je ne peux pas ban cet utilisateur !**');

user.send(`Tu as été ban du sereur ${message.guild.name} pour la raison : \`${reason}\``)
        }
 
        if(toBan.bannable){
            let x = new Discord.MessageEmbed()
            .setTitle('__Info Ban__')
            .setDescription('Voici les informations du ban de cet utilisateur :')
            .addField('__**Membre ban :**__', toBan)
            .addField('__**Ban par :**__', message.author)
            .addField('__**Raison du ban :**__', reason)
            .setColor("0099ff");


            message.channel.send(x);
            toBan.ban();
        }
        }

exports.help = {
  name: 'ban',
  aliases: ['tempban', 'gban', 'b', 'gtempban'],
}