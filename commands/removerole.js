const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**/ Vous n'avez pas l'autorisations de remove un role \**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("**/ Impossible de trouver ce membre. \**");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("**/ Spécifiez un rôle ! \**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**/ Impossible de trouver ce rôle. \**");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("**/ il n'a pas ce rôle. \**");
  await(rMember.removeRole(gRole.id));
  message.channel.send(`RIP, ${rMember} vous avez perdu le rôle  ${gRole.name} role!`)
  
}

module.exports.help = {
  name: "removerole"
}