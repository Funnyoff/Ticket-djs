const Discord = require("discord.js")
const db = require('quick.db')
const owner = new db.table("Owner")
const config = require("../config")
const color = config.app.color
const footer = config.app.footer

module.exports = {
  name: 'botinfo',
  usage: 'botinfo',
  description: `Permet de voir les informations du bot`,
  async execute(client, message, args) {

    const Embed = new Discord.MessageEmbed()
      .setTitle(`Mes Informations`)
      .addField(`**Nom**`, `\`${client.user.username}\``, true)
      .addField(`**ID**`, `\`${client.user.id}\``, true)
      .addField(`\`🥊\`**Ping**`, `\`${client.ws.ping}ms\``, true)
      .addField(`\`💎\`**Développeur**`, `<@1010944755674390631>`, true)
      .addField(`\`🌐\`**Nombre de serveurs**`, `\`${client.guilds.cache.size.toLocaleString()}\``, true)
      .addField(`\`👤\`**Nombre d'utilisateurs**`, `\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\``, true)

      .setFooter(`${footer}`, client.user.displayAvatarURL())
      .setColor(color)
    message.channel.send({ embeds: [Embed] })
  }
}