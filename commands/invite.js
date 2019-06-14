    
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var invite = new Discord.RichEmbed()
        .setDescription("🔧 Ajouter Bousty sur votre serveur discord !")
        .addField("__**Lien d'invitation avec les permissions d'administrateurs :**__", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=584164138683727908&scope=bot&permissions=8)")
        .addField("__**Lien d'invitation avec les permissions que vous pouvez personnaliser :**__", "[**Cliquez ici**](https://discordapp.com/oauth2/authorize?client_id=584164138683727908&scope=bot&permissions=2146958463)")
        .addField("__**Lien d'invitation sur le serveur Discord Bot :**__", "[**Cliquez ici**](https://discord.gg/4QdaYrz)")
        .setColor("#8697CB")
    message.channel.send(invite)
}

module.exports.help = {
    name: "invite"
}