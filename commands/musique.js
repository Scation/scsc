pconst Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Musique")

    .setColor("#fffb0d")

    .addField("`" + message.prefix +"play`", "Joue la musique ou rechercher une vidéo sur youtube.")
    
    .addField("`" + message.prefix +"stop`", "Arrête la chanson en cours de lecture.")

    .addField("`" + message.prefix +"resume`", "Reprendre la chanson en pause.")

    .addField("`" + message.prefix +"skip`", "Saute la chanson en cours de lecture.")

    .addField("`" + message.prefix +"np`", "Montre ce qui se joue en ce moment.")

    .addField("`" + message.prefix +"queue`", "Affiche la file d'attente.")

    .addField("`" + message.prefix +"volume`", "Réglez le volume de la chanson.")

.setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")

message.channel.send(embed);
}
module.exports.help = {
  name: "music"
}
