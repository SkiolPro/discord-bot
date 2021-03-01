const Discord = require('discord.js')
const settings = require('../settings.json')

exports.run = async(client, message, args) => {

if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(" :x: **Vous n'avez la permission requise !**")

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(' ');

        if(!user) return message.channel.send("**:x: Tu n'a pas mentionné cet utilisateur ou c'est un bot !**");

        if(user.bot) return message.channel.send('**:x: Tu ne peux pas kick un bot !**');

        if(!reason) return message.channel.send('**:x: Tu dois spécifier la raison du kick.**');
 
       if(user.bot) return message.channel.send('**:x: Tu ne peux pas warn un bot !**');

        if(message.author.id === user.id) return message.channel.send('**:x: Tu ne peux pas te warn toi même !**');

        if(!toKick.kickable){
            return message.channel.send(':x: **Je ne peux pas ban cet utilisateur**');

        user.send(`Tu as été kick du serveur ${message.guild.name} par ${message.author} pour la raison : \`${reason}\``)
message.author.send()

}
        if(toKick.kickable){
            let x = new Discord.MessageEmbed()
            .setTitle('__Info Kick__')
            .setDescription('*Voici les informations du kick de cet utilisateur :*')
            .addField('__**Membre kick :**__', toKick)
            .addField('__**kick par :**__', message.author)
            .addField('__**Raison du kick :**__', reason)
            .setColor("0099ff");
 
            message.channel.send(x);
            toKick.kick();
        }
    }

exports.help = {
  name: 'kick',
  aliases: ['k', 'expulse'],
}