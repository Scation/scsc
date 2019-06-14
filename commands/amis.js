const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("**/ Merci de mentionner un utilisateur pour effectuer cette action. \**")
            .setColor("#F53436")
        message.channel.send(error_mentions)
    }else {
        var declareramitie = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de déclarer son amitié pour <@" + member.user.id + "> !")
            .setColor("#34363C")
            .setImage("https://www.journee-de-la-femme.com/wp-content/uploads/2018/12/citation-amiti%C3%A9.jpg")
        message.channel.send(declareramitie)
    }
}

module.exports.help = {
    name: "amitié"
}