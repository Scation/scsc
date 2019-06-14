const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
message.delete();
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**/ Vous n'avez pas les autorisationsde Mute. \**");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(tomute === message.guild.member(message.author)) return message.channel.send("**/ Pourquoi veux-tu te mettre en sourdine? \**")
  if(!tomute) return message.channel.send("**/ Impossible de trouver l'utilisateur. \**");
  let muterole = message.guild.roles.find(`name`, "Muted");
let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let Embed = new Discord.RichEmbed()
  .setTitle("Mute")
  .setColor("#ff2700")
  .addField("Modérateur",message.author.tag)
  .addField("Utilisateur", tomute.user.tag)
  .addField("Raison", `${reason ? reason : "Pas de Raison."}`)
  .setTimestamp();
 message.channel.send("**/ Cet utilisateur a été Mute. \**")
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.send("**/ Veuillez créer un canal mod-log! \**")
  channel.send(Embed)
  }
module.exports.help = {
  name: "mute"
}
