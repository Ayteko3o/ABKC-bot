const Discord = require('discord.js');
const client = new Discord.Client();

bot.on("ready", async () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  console.log(`${bot.user.username}şuan aktif!`);
  bot.user.setGame("!!bilgi", "https://www.twitch.tv/abkc");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
