const Discord = require('discord.js');
const client = new Discord.Client();

await client.user.setGame('?help')
    
--OR--
    
await client.user.setPresence({
  data: {
       game: {
            name: '?help'
        }
    }
})

client.login(process.env.BOT_TOKEN);
