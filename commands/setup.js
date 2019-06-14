    
const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**Vous n'avez pas la permission de le faire !**");
  message.guild.createChannel('mod-log', 'text');

  message.channel.send("Les logs sont maintenant configurés pour votre serveur !")
}


module.exports.help = {
    name: "setup"
}