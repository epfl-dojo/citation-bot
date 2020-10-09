const {Client, MessageEmbed, Collection} = require('discord.js')
const {token} = require('./secrets.json')
const {citations} = require('./citation.json')

const client = new Client();

client.once('ready', () => {
  console.info('✨ The bot is running.');
});

client.on("message", async message => {
    if (message.content.toLowerCase() == "/c"){
      for (var i = 0; i < citations.length; i++) {
        const msg = await message.channel.send(`"${citations[i].Text}" - *${citations[i].Author}*`)
      }
    }
});


client.login(token)
