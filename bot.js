const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzcxMDM0MTU1NDgzOTIyNDYx.X5mPgw.KZvX-sXBe1o7SQ2GAenquf3Yf9s);//BOT_TOKEN is the Client Secret
