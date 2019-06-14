const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**/ Vous n'avez pas l'autorisation de changer le Prefix ! \**");
  if(!args[0]) return message.channel.send("**/ S'il vous plaît spécifier quelque chose ! \**")

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setTitle("Personnalisation du Préfix")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")
  .addField(`Le préfixe est changer ! :`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}