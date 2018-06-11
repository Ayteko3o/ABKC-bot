const prefix = require("./prefix.json");
const Discord = require('discord.js');

const bot = new Discord.Client({disableEvreyone: true});

bot.on("ready", async () => {
  console.log("You are connected to " + bot.guilds.size + " servers!");
  console.log(`${bot.user.username}şuan aktif!`);
  bot.user.setGame('Hearthstone')
})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = abkcbot.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}bilgi`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("ABKC sunucu hakkında")
    .setColor("#c900e8")
    .setThumbnail(sicon)
    .addField("Sunucu Adı", message.guild.name)
    .addField("Oluşturulma", message.guild.createdAt)
    .addField("Katılma", message.member.joinedAt)
    .addField("Üye Sayısı", message.guild.memberCount);

    message.channel.send(serverembed);


  }

});



// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
