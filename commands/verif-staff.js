const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first() || message.author;
    const staffs = ["323858737234444289","583031110292734202","583318939120041986"];
    if (!staffs.includes(user.id)) {
      
      return message.channel.send(`:x: :rocket: L\'utilisateur/trice ${user.username} ne fait pas parti(e) de nos équipes.`).then(msg => msg.delete(20000));
    }
    message.channel.send(`:white_check_mark: :rocket: ${user.username} fait bien parti(e) de nos équipes.`).then(msg => msg.delete(20000));
  }
  
  module.exports.help = {
    name: "verif-staff"
  }