const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.reply(":rocket: Vous n'avez pas l'autorisation de WARN").then(msg => msg.delete(8000));;
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  message.delete();
  if(!wUser) return message.reply(":rocket: Je ne trouve pas l'utilisateur.").then(msg => msg.delete(8000));;
  let reason = args.join(" ").slice(22);
  message.delete();
if(!reason) return message.channel.reply(":rocket: Merci de fournir une raison.").then(msg => msg.delete(8000));;
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };
  
  
  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#fc6400")
  .addField("Membre", `${wUser.user.tag}`)
  .addField("Modérateur", `${message.author.tag}`)
  .addField("Nombre de Warn", warns[wUser.id].warns)
  .addField("Raison", `${reason ? reason : "Pas de Raison."}`);

  let warnchannel = message.guild.channels.find(`name`, "mod-log");
  if(!warnchannel) return message.channel.reply(":rocket: Merci de créer un canal `mod-log`.");
  
  warnchannel.send(warnEmbed);
  message.channel.reply(":rocket: L'utilisateur a été Warn.").then(msg => msg.delete(8000));;
  
}

module.exports.help = {
  name: "warn"
}

  