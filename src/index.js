// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require('venom-bot');
const bankofstages = require('./bankofstages');
const steps = require('./steps');
 
// bot.create().then((client) => start(client));
 
// function start(client) {
//   client.onMessage((message) => {
//     if (message.body === 'Hi') {
//       client.sendText(message.from, '👋 Hello from sulla!');
//     }
//   });
// }

function getStage(user) {
    return bankofstages.db[user].stage;
}

console.log(getStage('user2'));

//console.log(steps.step[getStage('user1')].obj.execute());