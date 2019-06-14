const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Utilities")
.setColor("RANDOM")
.addField("`" + message.prefix +"note`","Enregistrer des notes.")
.addField("`" + message.prefix +"pass`","Générer un mot de passe.")
.addField("`" + message.prefix +"avatar`", "Générer l'avatar d'un membre.")
.addField("`" + message.prefix +"define`", "Define a given term.")
.addField("`" + message.prefix +"bvn`", "Souhaiter la bienvenue a un nouveau membre.")
.addField("`" + message.prefix +"decrypt`", "Decrypt an encrypted arguement.")
.addField("`" + message.prefix +"calcule`", "Calculer une expression mathématique.")
.addField("`" + message.prefix +"message`", "Envoyer un message a une personne.")
.addField("`" + message.prefix +"npm`", "Chercher une information sur un npm")
.addField("`" + message.prefix +"sondage`", "Sondage pour avoir des réponses.")
.addField("`" + message.prefix +"vstaff`", "Vérifier si la personne fait partie de notre Staff.")
.setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")
message.channel.send(embed);
}

module.exports.help = {
  name: "outils"
}
