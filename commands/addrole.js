const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel("**/ Vous n'avez pas l'autorisation. \**");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send("*/ Cet utilisateur est introuvable !**");
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("**/ Veuillez spécifier un rôle ! \**");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("**/ Impossible de trouver ce rôle. \**");

  if(rMember.roles.has(gRole.id)) return message.reply("**/ a déjà ce rôle. \**");
  await(rMember.addRole(gRole.id));
  message.channel.send(`|${rMember} a obtenu le role ${gRole.name}.`).then(msg => msg.delete({timeout: 5000}));
  
}

module.exports.help = {
  name: "addrole"
}
