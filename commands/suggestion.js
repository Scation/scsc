const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ");
    if(!args[0]) return message.channel.reply("Votre syntaxe est incorrecte. \n```Syntaxe : suggestion <Message>```").then(msg => msg.delete(8000));
    var suggest = new Discord.RichEmbed()
        .setDescription("| Nouvelle suggestion !")
        .addField("💼 __Auteur :__", "<@" + message.author.id + ">")
        .addField("📝 __Description :__", thingToEcho, true)
        .setColor("#FFD97C")
    client.channels.get('584865388525781087').send(suggest)
    .then(function (message){
        message.react("✅")
        message.react("⛔")
    }).catch(function(){

    });
    message.delete();
  message.reply(":rocket: Merci ! Votre suggestion viens d'être envoyé sur le serveur principal. :heart: ").then(msg => msg.delete(8000));
}
module.exports.help = {
    name: "suggestion"
}