const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("NSFW")
.setColor("#e64aa9")
.addField("`" + message.prefix +"hentai`", "Donne une image __**HENTAI**__ aléatoire.")
.addField("`" + message.prefix +"neko`", "Donne une image __**NEKO**__ aléatoire.")
.addField("`" + message.prefix +"boobs`", "Donne une image __**BOOBS**__ aléatoire.")
.addField("`" + message.prefix +"ass`", "Donne une image __**ASS**__ aléatoire.")
.addField("`" + message.prefix +"ecchi`", "Donne une image __**ECCHI**__ aléatoire.")
.setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")
message.channel.send(embed);
}

module.exports.help = {
  name: "nsfw"
}

