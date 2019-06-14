// Host
const http = require("http");
const winston = require('winston');
const express = require("express");
const antispam = require('discord-anti-spam');
const app = express();
app.get("/", (request, response) => {
  console.log(`${new Date()} Tritax AI's Ping Received.`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2000);


// Calling the Packages and Files
const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
let bot = new Discord.Client();
bot.commands = new Discord.Collection();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, bot);


// Ready event
bot.on('ready', () => {
  console.log('______________________________________');
  console.log("Connexion en cours...");
  console.log('______________________________________');
  setTimeout(function(){
  console.log("Le bot est en ligne.");
  console.log('______________________________________');
  }, 1000);
  
  
// Bot Status
function botStatus() {
  let status = [
    `Mon Prefix = ${botconfig.prefix}.`,
    `Bousty V1.0 | EN DEV`,
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {Type: 'STREAMING'});        
}; setInterval(botStatus, 20000)
  setInterval(() => {
    dbl.postStats(bot.guilds.size)
  }, 1800000);
});


// Message event
bot.on("message", async message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  };
	
  let prefix = prefixes[message.guild.id].prefixes;
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return;
    
// Bot Mention
  if(message.content.toLowerCase() === '<@584164138683727908>'){
    let embed = new Discord.RichEmbed()
    .setTitle("Bousty V1.0 | En Développement ")
    .addField("Préfix par défaut", `\`${prefix}\``, true)
    .addField("Commandes", `\`${prefix}help\``, true)
    .addField("Report", `\`${prefix}breport\``, true)
    .addField("Serveur Discord", "[**Cliquez ici**](https://discord.gg/4QdaYrz)" , true)
    
    .addField("Ajouter Bousty", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=584164138683727908&scope=bot&permissions=2146958463)" , true)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
    message.channel.send(embed);
  };

	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	if(message.author.bot) return undefined;
	if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;
  
	try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(bot, message, args);
  
  console.log(`[${message.author.tag}]: Command: "${cmd}" [${message.guild.name}]`);
	} catch (err) {
    console.log(`Tritax AI Error: J'ai trouvé une erreur lors du chargement de mes commandes !\n${err.stack}`);
  };   
});


// Anti-Selfbot
const logger = winston.createLogger ({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'selfbot.log' }),
  ],
})


bot.on('message', msg => {
  if (
    msg.nonce === null &&
    msg.attachments.size <= 0 &&
    !msg.author.bot &&
    msg.guild 
  ) {
    logger.warn(
      `Le membre (${msg.author.tag}) utilise un selfbot @ ${msg.channel.name} - ID: ${msg
        .author.id}`
    )
    msg
      .delete()
      .catch(() =>
        logger.log(
          `Je n'est pas pu supprimer le message de l'utilisateur: ${msg.author.tag}!`
        )
      )
  }
})


//Message de remove
bot.on('guildMemberRemove', member => {
  const welcomechannel = member.guild.channels.find('name', '╭▷bienvenue「📝」')
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail((member.user.displayAvatarURL))
  .setTimestamp()
  .addField(`**${member.user.username}** A quitté **${member.guild.name}** ! `, "Dommage pour toi !")
  return welcomechannel.send(embed)
});


//message de welcome
bot.on('guildMemberAdd', member => {
  const welcomechannel = member.guild.channels.find('name', '╭▷bienvenue「📝」')
  var embed = new Discord.RichEmbed()
  .setThumbnail((member.user.displayAvatarURL))
  .setColor('RANDOM')
  .setTimestamp()
  .addField(`Bienvenue à **${member.user.username}** sur **${member.guild.name}** !`,'Profite, et bon voyage !')
  return welcomechannel.send({embed})

});

// Token de Boosty
bot.login('');