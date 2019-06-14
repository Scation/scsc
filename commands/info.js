const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor("#d17600")
    .addField("Développeur", "𝓨𝒆𝓵𝒆𝓷𝓪_#8888   &   𝓶𝓪𝓼𝓱𝓪𝓵𝓵𝓾𝔁#0666")
    .addField("Library", "`discord.js@11.3.2`")
    .addField("Liens", `[\`Discord\`](https://discord.gg/jwsVk62)`)
    .setColor("#e2df1b")
    .setFooter("Bousty v1.0")
.setFooter("En cas de problème, veuillez le signaler en utilisant " + message.prefix + "breport")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "info"
}