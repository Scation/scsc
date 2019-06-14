const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(message.author.bot) return;
  if(!message.channel.nsfw) {return message.channel.send(`:underage: **Ce canal n'est pas marqué comme NSFW!** :rage:`)}
  if(message.channel.type !== "text") return;
  randomPuppy('Porn')
            .then(url => {
                const embed = new Discord.RichEmbed()
    
                .setTitle("Porn NSFW")
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#e64aa9' ? message.guild.me.displayHexColor : 0xffffff}`)
    return message.channel.send({ embed });
            })
}
module.exports.help = {
	name: "porn"
}
