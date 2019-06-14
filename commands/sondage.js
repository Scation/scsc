const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  if (args == 0) return message.channel.send("**/ Merci de fournir un sujet de sondage. \**")

  let embed = new Discord.RichEmbed()
  .setTitle(`Sondage par ${message.author.username}`)
  .setColor("#ffff00")
  .setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")
  .setDescription(`${args}`.split(',').join(' '));

  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
       message.react("✅")
       message.react("⛔")
     }).catch(function() {
  });
};

module.exports.help = {
  name: 'sondage'
};
