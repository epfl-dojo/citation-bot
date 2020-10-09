const {Client, MessageEmbed, Collection} = require('discord.js')
const {token} = require('./secrets.json')

const client = new Client();

client.once('ready', () => {
  console.info('✨ The bot is running.');
});

client.on("message", async message => {
    if (message.content.toLowerCase() == "/citations"){
      
    }
});


client.login(token)
