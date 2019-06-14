const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = args[0]
    message.delete();
    if(!bUser) return message.reply(":rocket: Je ne trouve pas l'utilisateur.").then(msg => msg.delete(8000));
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":rocket: Vous n'avez pas l'autorisation de UNBAN.").then(msg => msg.delete(8000));;
  message.reply(":rocket: Débannissement Traité.").then(msg => msg.delete(8000));
  message.guild.unban(bUser)
}

module.exports.help = {
  name:"unban"
}
