const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
message.delete();
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.reply(":rocket: Vous n'avez pas l'autorisation de UNMUTE.").then(msg => msg.delete(8000));;
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  message.delete();
  if(!tomute) return message.reply(":rocket: Je ne trouve pas l'utilisateur, **( ID INVALIDE )**.").then(msg => msg.delete(8000));;
  let muterole = message.guild.roles.find(`name`, "Muted");
  message.delete();
  if(!muterole) return message.channel.reply(":rocket: Merci de créer un rôle nommé `Muted`.").then(msg => msg.delete(8000));;
  

  
    message.delete();
  
  

  await(tomute.removeRole(muterole.id));
  let reason = args.join(" ").slice(22)
    let Embed = new Discord.RichEmbed()
  .setTitle("Un-Mute")
  .setColor("#fc6400")
  .addField("Membre", tomute.user.tag)
  .addField("Modérateur", message.author.tag)
  .addField("Raison", `${reason ? reason : "Pas de Raison"}`)
  .setTimestamp()
  message.channel.reply(" Commande **UNMUTE** est Traité.").then(msg => msg.delete(8000));;
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.reply(":rocket: Merci de créer un rôle nommé `Muted`.").then(msg => msg.delete(8000));;
  channel.reply(Embed)
}
module.exports.help = {
  name: "unmute"
}
