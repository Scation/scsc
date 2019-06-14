const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Modération")

    .setColor("#ff2700")

    .addField("`" + message.prefix + "ban`", "Ban un membre.")

    .addField("`" + message.prefix + "unban`", "Un-ban un membre. [Avec l'ID]")

    .addField("`" + message.prefix +"kick`", "Kick un membre.")

    .addField("`" + message.prefix +"clear`", "Effacer les messages")

    .addField("`" + message.prefix +"purge`", "Efface les messages d'un membre.")

    .addField("`" + message.prefix +"tempmute`", "Mute temporairement un membre.")

    .addField("`" + message.prefix +"unmute`", "Unmute un membre.")

    .addField("`" + message.prefix +"warn`", "Warn un membre.")

.setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")

message.channel.send(embed);
}

module.exports.help = {
  name: "modo"
}
