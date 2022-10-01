const Discord = require('discord.js');
const config = require("../config")
const color = config.app.color

module.exports = {
	name: 'invite',
	usage: 'invite',
	description: `Permet d'inviter le bot sur son serveur`,
	async execute(client, message, args) {

		const inv = new Discord.MessageEmbed()
			.setColor(color)
			.setTitle('Invite moi')
			.setDescription(`**Soutenez-nous en invitant ${client.user.username} sur votre serveur** \n**[Invite moi en cliquant ici](https://discord.devfr)**`, true)
		message.channel.send({ embeds: [inv] })
	}
}