const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("**/ Vous devez mentionnez un utilisateur pour lui souhaiter son anniversaire. \**")
            .setColor("#DD2E44")
        message.channel.send(error_mentions)
    }else {
        var anniversaire = new Discord.RichEmbed()
            .setDescription("🎉 <@" + message.author.id + " viens de souhaiter un bonne anniversaire à " + "<@" + `${member.user.id}` + "> !")
            .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8Q5vszNIQIwMqgtI7V-qZjJJZkcg1ZAk0X_qWskP13leqdAo")
            .setColor("#DD3333")
        message.channel.send(anniversaire)
    }
}

module.exports.help = {
    name: "anniversaire"
}