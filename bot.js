const Discord = require('discord.js');
const client = new Discord.Client();

const bot = new Discord.Client({disableEvreyone: true});

bot.on('ready', () => {
  bot.user.setGame('Hearthstone')
})


client.login(process.env.BOT_TOKEN);
