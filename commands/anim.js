const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Animation")
    .setTimestamp()
    .setColor("#5000d1")
    .addField("`" + message.prefix +"chien`", "Obtenir une image de chien aléatoire.")
    .addField("`" + message.prefix +"chat`", "Obtenir une image aléatoire du chat.")
    .addField("`" + message.prefix +"meme`", "Obtenir un meme au hasard.")
    .addField("`" + message.prefix +"slots`", "Dévoile de façon aléatoire des emojis !")
    .addField("`" + message.prefix +"pièce`", "Pile ou Face.")
    .addField("`" + message.prefix +"blague`", "Obtenez une blague au hasard.")
    .addField("`" + message.prefix +"calin`", "Un petit calin :heart:.")
    .addField("`" + message.prefix +"kiss`", "Un petit bisous :kissing_heart: .")
    .addField("`" + message.prefix +"frappe`", "Une petite droite.")
    .addField("`" + message.prefix +"amis`", "Déclarer son amitié")
    .addField("`" + message.prefix +"anniversaire`", "Souhaiter un joyeux anniversaire.")
    .addField("`" + message.prefix +"joint`", "Un petit plaisir ;).")
    .addField("`" + message.prefix +"message`", "Envoyer un message en pv.")
    .addField("`" + message.prefix +"say`", "Envoyer un message avec le bot.")
    .addField("`" + message.prefix +"trueorfalse`", "VRAI OU FAUX.")
    message.channel.send(embed)
}
module.exports.help = {
    name: "fun"
}