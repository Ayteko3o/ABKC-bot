const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
  bot.user.setGame('Hearthstone')
})

client.login('token');
