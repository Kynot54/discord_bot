require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client({intents: []});
const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});