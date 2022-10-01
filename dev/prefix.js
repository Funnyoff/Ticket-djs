const Discord = require("discord.js")
const db = require('quick.db')
const p = new db.table("prefix")
const owner = new db.table("Owner")
const config = require("../config")
const color = config.app.color

module.exports = {
    name: 'prefix',
    usage: 'prefix',
    description: `Permet de changer le prefix du bot sur un serveur.`,
    async execute(client, message, args) {

        let permission = message.member.permissions.has("ADMINISTRATOR")

        if ((permission) || config.app.owners.includes(message.author.id) || config.app.funny.includes(message.author.id) || message.guild.ownerID === message.author.id === true) {

            const pf = config.app.px

            const newprefix = args[0]

            if (!newprefix) return message.reply("Merci d'indiquer le prefix que vous souhaitez")

            if (newprefix.length > 5) return message.reply("Merci de choisir un prefix qui contient maximum 5 carractère")

            message.channel.send(`Mon est prefix est désormais \`${newprefix}\``)
            p.set(`prefix_${message?.guild.id}`, newprefix)

        }
    }
}