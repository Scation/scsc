const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser === message.author) return message.channel.send("*Pourquoi voulez-vous vous BAN ?*")
    if(!bUser) return message.channel.send(" **/ Impossible de trouver l'utilisateur ! \** ");
    let bReason = args.join(" ").slice(22);
   if(!bReason) return message.channel.send(" **/ Merci de fournir une raison! **\ ")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**/ Vous n'avez pas l'autorisation de BAN. \** ");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff2700")
    .addField("User", bUser.user.tag)
    .addField("Modérateur", message.author.tag)
    .addField("Raison", `${bReason ? bReason : "Aucune."}`)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .setColor("#ff2700")
    .addField("Modérateur", message.author.tag)
    .addField("Raison", `${bReason ? bReason : "Aucune."}`)
    .addField("Interdit dans", message.guild.name)
  message.channel.send("**| Ce membre a été banni.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
  try{bUser.send(embed)}catch(e){message.channel.send("Impossible d'envoyer un message à l'utilisateur.")}

}

module.exports.help = {
  name:"ban"
}
