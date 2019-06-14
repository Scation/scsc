const Discord = require("discord.js");
let iumics = require("../data/money.json");
const fs = require("fs");

exports.run = async (bot, message, args) => {

  if(!args[0]) return message.channel.send("**Mention someone for me to pay.** `ium pay <user> <number>`");

if(!iumics[message.author.id]){
    return message.channel.send("**You don't have any iumics.** You can earn iumics by using my commands more!")
  }

  let payUsers = message.mentions.users.first();

  if(!iumics[payUsers.id]){
    iumics[payUsers.id] = {
      iumics: 0
    };
  }

  let payIumics = iumics[payUsers.id].iumics;
  let sIumics = iumics[message.author.id].iumics;

  if(message.author.id === payUsers.id){
    return message.channel.send("**You can't pay money to yourself.** `ium pay <user> <number>`")
}

if(isNaN(args[1])) return message.channel.send("**Supply a number.** `ium pay <user> <number>`");

  if(sIumics < args[1]) return message.channel.send("You do not have enough iumicics! You can earn iumics by using my commands more!");

  if (parseInt(args[1]) <= 0) return message.channel.send("You must give a number that is higher than 0.");

  iumics[message.author.id] = {
    iumics: sIumics - parseInt(args[1])
  };

  iumics[payUsers.id] = {
    iumics: payIumics + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${payUsers}, **${args[1]}** iumics.`);

  fs.writeFile("./money.json", JSON.stringify(iumics), (err) => {
  });

}

module.exports.help = {
  name: "pay"
}