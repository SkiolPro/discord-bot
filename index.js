const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Bonjour mon créateur , ton bot Skiol est connecté !'));

app.listen(port);

const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const fs = require('fs');
const ms = require('ms');
const db = require('quick.db');

let prefix = settings.prefix

client.once('ready', () => {
  console.log(`Voici les commandes activés :`);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err)
  files.forEach((file) => {
    const event = require(`./events/${file}`)
    let eventName = file.split(".")[0]
    client.on(eventName, event.bind(null, client))
  })
})

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err)
  files.forEach((file) => {
    if (!file.endsWith(".js")) return
    let cmd = require(`./commands/${file}`)
    let cmdFileName = file.split(".")[0]
    client.commands.set(cmd.help.name, cmd)
    console.log(`${cmdFileName} : activé`)
    if (cmd.help.aliases) {
      cmd.help.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name)
      })
    }
  })
})

client.user.setActivity(`développer | ${prefix}help`, {type: 'PLAYING'})

})

client.login(settings.token)