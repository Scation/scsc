const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let defineduser = message.mentions.users.first();
  let user = message.author
  message.delete();
  if(!args[1]){return message.reply("**/ S'il vous plaît spécifier le Message. \**")}
  if (!args[0]) {return message.reply(`**/ S'il vous plaît spécifier un utilisateur que vous voulez contacter. \**`)}
  else{             
  let reason = args.join(" ").slice(22);    
  let Embed = new Discord.RichEmbed()
   .setTitle('Message 👉')
   .addField('Bip Bip, Message !', `Par : ${user}`, true)
   .addField('Message :', reason, true)
   .setColor(0xD4AF37)
    defineduser.send(Embed)
    message.channel.send("**/ Ce membre a reçu votre message. \**")
}
}

module.exports.help = {
    name: "message"
}