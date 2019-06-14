const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
exports.run = (client, message, args) => {
        const adapter = new FileSync('./note.json')
        const db = low(adapter)
        const get_notes = db.get("note").find({ auteur: message.author.id }).value()
        let note = ''
        if (!get_notes) note = "Aucune note enregistré pour le moment."
        else {
            let note_msg = Object.values(get_notes)
            note = note_msg[1]
        }
        message.author.send("**/ Voici vos notes**\ __ : \n ```" + note + "```")
        message.channel.send("**/ Vos notes ont été envoyé en message privée. \**")
}
module.exports.help = {
    name: "note"
}