const { Client, Events, GatewayIntentBits } = require('discord.js');
const conf = require('../conf.json');
const fs = require('node:fs');
const path = require('node:path');
const TOKEN = conf.token;

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.login(TOKEN);

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}