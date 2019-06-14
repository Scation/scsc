const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Menu **Aide**")
  .setColor("#120afc")
  
  .addField("8ball", "Usage : +8ball <question>")
  
  .addField("chat", "Usage : +chat")
  
  .addField("chien", "Usage : +chien")
  
  .addField("ping", "Usage : +ping")
  
  .addField("VRAI OU FAUX", "Usage : +trueorfalse <Message>")
  
  .addField("breport", "Usage : +breport <message>")
  
  .addField("say", "Usage : +say <message>")
  
  .addField("serverstats", "Usage : +serverstats")
  
  .addField("botinfo", "Usage : +botinfo")
  
  .addField("botstat", "Usage : +otstat")
  
  
  
  
  .addField("userstats", "Usage : +userstats <@user>")
  
  .addField("verif-staff", "Usage : +verif-staff <@user>")
  
 

  

  message.member.send(helpembed);

  let modembed = new Discord.RichEmbed()
  .setDescription("Menu **Modérateur**")
  .setColor("#8b3aad")
  
  .addField("ban", "Usage : +ban <@user + raison>")
  
  .addField("unban", "Usage : $unban <ID>")
  
  .addField("kick", "Usage : +kick <@user + raison>")
  
  .addField("warn", "Usage : +warn <@user + raison>")
  
  .addField("warnlevel", "Usage : +warnlevel <@user>")
  
  .addField("mute", "Usage : +mute <@user + raison>")
  
  .addField("tempmute", "Usage : +tempmute <@user + durée + raison>")
  
  .addField("unmute", "Usage : +unmute <@user>")
  
  .addField("addrole", "Usage : +addrole <@user + role>")
  
  .addField("removerole", "Usage : +removerole <@user + role>")
  
  .addField("clear", "Usage : +clear <nombres>")
  
  .addField("purge", "Usage : +purge <@user + nombres>")
  
  .addField("prefix", "Usage : +prefix <nouveau préfixe>")
  
  try{
    await message.author.send(modembed);
    message.reply(":rocket: J'ai envoyé mes listes des commandes en **MP**.").then(msg => msg.delete(8000));
  }catch(e){
    message.reply("Vos **MP** sont verrouillés !").then(msg => msg.delete(8000));
  }
}
module.exports.help = {
  name: "help"
}