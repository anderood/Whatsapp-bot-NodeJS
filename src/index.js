// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require('venom-bot');
const bankofstages = require('./bankofstages');
const steps = require('./steps');
 
bot.create().then((client) => start(client));
 
function start(client) {
    client.onMessage((message) => {
      console.log(steps.steps[getStage('5511930891282@c.us')].obj.execute());
      client.sendText(
         message.from, 
         steps.steps[getStage("5511930891282@c.us")].obj.execute()
      );
    });
  }

function getStage(user) {
    return bankofstages.db[user].stage;
}

// console.log(steps.steps[getStage('user1')]);