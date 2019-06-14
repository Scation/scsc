const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(bot, message, args) => {
  superagent.get("https://nekos.life/api/neko", (err, res) => {
        if (err) { return console.log(`Une erreur s'est produite lors de l'exécution.`)}
    if(!message.channel.nsfw) {return message.channel.send(`:underage: **Ce canal n'est pas marqué comme NSFW!** :rage:`)}
    else{
        message.channel.send("", { embed: new Discord.RichEmbed()
.setTitle("Neko - NSFW")
.setColor(`${message.guild.me.displayHexColor!=='#e64aa9' ? message.guild.me.displayHexColor : 0xffffff}`)
.setImage(res.body.neko)
.setFooter(`Requested by ${message.author.tag}`)
})
}
})
}
module.exports.help = {
	name: "neko"
}