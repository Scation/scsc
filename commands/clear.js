const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**/ Vous n'avez pas l'autorisation de clear ! \**");
  if(!args[0]) return message.channel.send("**/ Veuillez spécifier un numéro. \**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:rocket: J'ai effacé **${args[0]}** messages. `).then(msg => msg.delete(9000));
});

}

module.exports.help = {
  name: "clear"
}