const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `**${guild.name}** Membres: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`J'ai ${bot.guilds.size} guilds!`)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}

module.exports.help = {
  name: "guilds"
}

