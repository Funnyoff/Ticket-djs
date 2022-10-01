const { MessageEmbed } = require('discord.js');
const config = require("../config")
const color = config.app.color
const footer = config.app.footer

module.exports = {
    name: 'support',
    utilisation: '{prefix}support',

    async execute(client, message, args) {

        const embed = new MessageEmbed()

        .setColor(color)
        .setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }))
        .setDescription('Pour rejoindre notre support [cliquez ici](https://discord.gg/devfr) \n**Dévelopeurs :** <@1010944755674390631>')
        .setFooter({text :`${footer} ❤️`})

        message.reply({ embeds: [embed] });
    }
}