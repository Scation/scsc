const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(!message.channel.nsfw) return message.channel.send(`:underage: **Ce canal n'est pas marqué comme NSFW!** :rage:`)
  randomPuppy('ecchi')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`Ecchi NSFW`)
                .setFooter(`Requested by ${message.author.tag}`)
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#e64aa9' ? message.guild.me.displayHexColor : 0xffffff}`)
    return message.channel.send({ embed });
            })
}
module.exports.help = {
	name: "ecchi"
}