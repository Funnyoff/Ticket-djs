const Discord = require("discord.js")
const config = require("../config")
const db = require('quick.db')
const p = new db.table("prefix")
const footer = config.app.footer
const color = config.app.color

module.exports = {
    name: 'help',
    usage: 'help',
    category: "utils",
    description: `Permet d'afficher l'help.`,
    async execute(client, message, args) {

        let pf = p.fetch(`prefix_${message.guild.id}`)
        if (pf == null) pf = config.app.px

        const embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Listes des commandes')
            .addField('General', '`help, invite, botinfo, support, ping`')
            .addField('Ticket', '`ticket, setcategorie, config`')
            .setFooter({ text: `${footer}` })

        message.reply({ embeds: [embed] })

    }
}