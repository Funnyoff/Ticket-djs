const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')
const config = require("../config")
const owner = new db.table("Owner")
const color = config.app.color
const footer = config.app.footer


module.exports = {
    name: 'setcategorie',
    usage: 'setcategorie <id>',
    description: `Permet de changer la catégorie des tickets.`,
    async execute(client, message, args) {

        let permission = message.member.permissions.has("ADMINISTRATOR")

        if ((permission) || config.app.owners.includes(message.author.id) || config.app.funny.includes(message.author.id) || message.guild.ownerID === message.author.id === true) {

            const funny = message.guild.channels.cache.filter(x => x.type === "GUILD_CATEGORY")

            const newCategorie = message.guild.channels.cache.get(args[0] || funny.id);
            if (!newCategorie) return message.channel.send({ content: "Aucun catégorie trouvé !" })
            if (db.get(` ${message.guild.id}.categorie`) === newCategorie) return message.channel.send(`📧 | __Nouveau salon d'alerte :__ \`${db.get(` ${message.guild.id}.categorie`)}\``)
            else {
                db.set(` ${message.guild.id}.categorie`, args[0])
                message.channel.send(`📧 | __Nouvelle catégorie :__ ${newCategorie.name}`)
            }

        }
    }
}