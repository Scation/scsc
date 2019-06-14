const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.member.hasPermission("SPEAK")) {
        let arg = message.content.split(" ").slice(1);
        let thingToEcho = arg.join(" ")
        if (!args[0]) return message.channel.send("Votre syntaxe est incorrecte. \n```Syntaxe : trueorfalse <Message>```")
        var trueorfalse = new Discord.RichEmbed()
            .setTitle("❓ VRAI OU FAUX :")
            .addField(thingToEcho, "Répondez avec les réactions ✅ ou ⛔ !")
            .setColor("#A31F33")
        .setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")
        message.channel.send(trueorfalse)
        .then(function (message){
            message.react("✅")
            message.react("⛔")
          
        }).catch(function(){

        });
        message.delete()
    }
}

module.exports.help = {
    name: "trueorfalse"
}