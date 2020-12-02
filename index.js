// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require('venom-bot');
 
bot.create().then((client) => start(client));
 
function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      client.sendText(message.from, '👋 Hello from sulla!');
    }
  });
}