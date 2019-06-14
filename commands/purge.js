const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  message.delete();
  const user = message.mentions.users.first();
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("**/ Vous n'avez pas l'autorisation de purger un membre \**");
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('**/ Merci de spécifier un montant à supprimer! \**');
if (!amount && !user) return message.reply('**/ Tu doit spécifier un utilisateur et une quantité, ou juste une quantité, de messages à purger! \**');
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : bot.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
}
module.exports.help = {
  name: "purge"
}

