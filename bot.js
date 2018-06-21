const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  bot.user.setGame('deneme')
})

client.login(process.env.BOT_TOKEN);
