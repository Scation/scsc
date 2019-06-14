const Discord = require('discord.js'); 
const botconfig = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
  let guild = message.guild;
  let icon = message.guild.iconURL;

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`Serveur Stats`)
  .setColor(botconfig.white)
  .setThumbnail(icon)
  .setColor("#00f91a")
        .addField("📋 __Nom du serveur__", guild.name, true)
       .addField("📊 __Nombre de membres__ ", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ ", guild.channels.size, true)
       .addField("💍 __Propriétaire__ ", guild.owner, true)
        .addField("🌍 __Région du serveur__ ", guild.region, true)
        .addField("📝 __ID du serveur__ ", guild.id, true)
  
  
  
        .addField("🕞 __Creation du serveur__ ", `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
     .addField("👾 __Nombre de Bots __ ", bots, true)
        .addField("😺 __Nombre d'Humains__ ", humans, true)
        .addField("💭 __Canaux textuel__  ", textChannels, true)
   .addField("🔊 __Canaux vocaux__ ", voiceChannels, true)
        .addField("🔐 __Verification__ ", guild.verificationLevel, true)
  .setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")


  return message.channel.send(embed);
}

module.exports.help = {
  name: "serverstats"
}