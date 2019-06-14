const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "En Ligne",
        idle: "Inactif",
        dnd: "Ne pas déranger",
        offline: "Invisible / Pas connecté"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "Oui";
  } else {
    bot = "Non";
  }
  let role = message.member.roles.map(r => `${r.name}`)
            let embed = new Discord.RichEmbed()
                .setThumbnail((target.displayAvatarURL))
                .setColor("#ff9300")
                .addField("Nom d'utilisateur", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Surnom", `${member.nickname !== null ? `Surnom: ${member.nickname}` : "Aucun"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Ne joue pas"}`,inline, true)
            .setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôles"}`, true)
  .addField("**Rejoint**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})`);
    
            message.channel.send(embed);
    }

module.exports.help = {
  name: "userstats"
}