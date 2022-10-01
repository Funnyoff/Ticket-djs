const Discord = require("discord.js")
const db = require('quick.db')
const owner = new db.table("Owner")
const config = require("../config")

module.exports = {
    name: 'config',
    usage: 'config',
    description: `Permet de voir la configuration du bot sur le serveur`,
    async execute(client, message, args) {

        let ticket = db.get(` ${message.guild.id}.categorie`)

        const embed = new Discord.MessageEmbed()
            .addField(`Configuration du serveur`, `📧 | Catégorie tickets : \`${ticket}\``)
            .addField(`Prefix : \`${config.app.px}\``, `\`${config.app.px}help\` pour obtenir la liste des commandes`)
            .addField(`Latence du bot`, `Ping : **${client.ws.ping}ms**`)
            .addField(`Info :`, `<:badgedeveloper:975416210600624128> Développeur : <@1010944755674390631> \n\n[Support](https://discord.gg/devfr)`)
            .setColor(config.app.color)

        message.channel.send({ embeds: [embed] })
    }
}