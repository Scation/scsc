const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informations du Bot")
    .setColor("#ff9300")
    .setThumbnail(bicon)
    .addField("Nom du bot", bot.user.username)
    .addField("Créé le", bot.user.createdAt)
    .addField("Créé par", "𝓨𝒆𝓵𝒆𝓷𝓪_#8888");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}