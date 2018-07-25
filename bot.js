const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.user.setPresence({ status: 'online', game: { name: 'GAME HERE' } });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
