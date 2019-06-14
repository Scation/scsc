	const Discord = require("discord.js");

	module.exports.run = async (bot, message, args) => {

	var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {

	const embedheads = new Discord.RichEmbed()
	.setTitle("Pile ou Face")
	.setColor("#F8A61C")
	.setDescription(`La pièce a atterri sur pile !`);
	message.channel.send(embedheads);
	} else if (resultflip == 2) {

	const embedtails = new Discord.RichEmbed()
	.setTitle("Pile ou Face")
	.setColor("#F8A61C")
	.setDescription(`La pièce a atterri sur face !`);
	message.channel.send(embedtails);
	}
	}

	module.exports.help = {
	name: "Pile ou Face"
  }