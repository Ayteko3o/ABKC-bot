const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', () => {
  bot.user.setGame('deneme')
})

client.login(process.env.BOT_TOKEN);
