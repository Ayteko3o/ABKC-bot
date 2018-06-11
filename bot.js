const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
  bot.user.setGame('GAME HERE')
})

client.login('token');
