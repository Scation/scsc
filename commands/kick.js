const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("**/ Impossible de trouver l'utilisateur! \**");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**/ Vous n'avez pas l'autorisation de Kick. \**")
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.channel.send("**/ Merci de fournir une raison! \**")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#ff2700")
  .addField("Modérateur", `${message.author}`)
  .addField("Membre", `${kUser}`)
  .addField("Raison", `${kReason ? kReason : "Pas de Raison."}`)
  .setTimestamp();

  let kickChannel = message.guild.channels.find(`name`, 'mod-log');
   let embed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#ff2700")
 .addField("Modérateur", message.author.tag)
  .addField("Membre", kUser.user.tag)
  .addField("Temps", message.createdAt.toLocaleString())
  .addField("Raison", `${kReason ? kReason : "Pas de Raison."}`);
message.channel.send("**/ Ce membre est Kick. \**")
kUser.kick(kReason)
kickChannel.send(kickEmbed);
try{kUser.send(embed)}catch(e) {message.channel.send("**/ Impossible d'envoyer un message à l'utilisateur. \**")}

}
module.exports.help = {
  name: "kick"
}
