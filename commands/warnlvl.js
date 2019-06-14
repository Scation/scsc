const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.reply(":rocket: Vous n'avez pas l'autorisation pour WARNLVL").then(msg => msg.delete(8000));;
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply(":rocket: Je ne trouve pas l'utilisateur.").then(msg => msg.delete(8000));;
  let warnlevel = warns[wUser.id].warns

  let embed = new Discord.RichEmbed()
  .setTitle("Warn")
  .addField("Membre", wUser.user.tag)
  .addField("Modérateur", message.author.tag)
  .addField("Nombre de Warn", `${warnlevel}`)
  .setColor("#f4b342")
  message.channel.send(embed);

}

module.exports.help = {
  name: "warnlvl"
}
