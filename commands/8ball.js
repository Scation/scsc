const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("S'il vous plaît poser une question complète")
  let replies = ["Il est certain", "C'est décidément",
"Sans aucun doute",
"Oui définitivement",
"Comme je le vois oui",
"Probablement",
"Oui",
"Les signes pointent vers Oui",
"Demander à nouveau plus tard",
"Mieux vaut ne pas vous dire maintenant",
"Je ne peux pas prédire maintenant",
"Concentrez-vous et redemandez",
"Ne compte pas dessus",
"Ma réponse est no",
"Ma réponse est oui",
"J'aime les pates"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#42f453")
  .addField("🎱Question", question)
  .addField("🎱Réponse", replies[result]);
  message.channel.send(ballembed);
}
module.exports.help = {
  name: "8ball"
}
