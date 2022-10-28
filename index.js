import {memes, randomInt} from "./memeSources.js"

const keyword = "meme"

require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client({intents: []});
const TOKEN = process.env.TOKEN;

client.login(TOKEN);

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

// client.on('message', (message) => {
//   if (message.content.contains)
// });