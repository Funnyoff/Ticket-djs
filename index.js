const { Client, Intents, guild, Collection } = require('discord.js');
const Discord = require("discord.js")
const config = require('./config')
const db = require('quick.db')
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
    restTimeOffset: 0,
    partials: ["USER", "CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION"]
});

client.login(config.app.token);
client.commands = new Collection();

const ticketsFiles = readdirSync('./tickets').filter(file => file.endsWith('.js'));
for (const file of ticketsFiles) {
    const command = require(`./tickets/${file}`);
    client.commands.set(command.name, command);
}

const devFiles = readdirSync('./dev').filter(file => file.endsWith('.js'));
for (const file of devFiles) {
    const command = require(`./dev/${file}`);
    client.commands.set(command.name, command);
}

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
    }
}

client.on('message', async message => {

    const pf = config.app.px

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)))
        message.channel.send(`Mon prefix sur le serveur est : \`${pf}\``)

})