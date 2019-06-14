const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let result = Math.floor((Math.random() * 100) + 1);
  		message.channel.send(" **| Vous avez roulé **" + result + "+3 ** joint**");
}

module.exports.help = {
  name: "joint"
}
