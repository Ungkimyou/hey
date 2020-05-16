// const http = require("http");
// const express = require("express");
// const app = express();

  

// // const { get  } = require('superagent');
// // const { get } = require('node-superfetch');
// const Discord = require("discord.js");
// const client = new Discord.Client();
// const fs = require("fs");
// const server = http.createServer(app);

// const DBL = require('dblapi.js');
// const dbl = new DBL(process.env.TOPGG_TOKEN, { webhookPort: 3000, webhookAuth: 'khlang', webhookServer: server });

  
  
  
//   dbl.webhook.on('ready', hook => {
//   console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
// });

// dbl.webhook.on('vote', async  (vote, message )=> {  
  
//     console.log(`User with ID ${vote.user} just voted!`);
  
//   try{
// //  let {body} = await superagent.get(`https://hd-development.glitch.me/api/fetchUser?id=${vote.user}`);
// //   let embed = new RichEmbed() 
// // //  .setColor('RANDOM') 
// //  .setThumbnail(body.avatarURL)   
// //  // .setAuthor('KhangBot vote Webhook', 'https://cdn.discordapp.com/emojis/338808864352763904.png') 
// //   .setDescription(`***${body.tag}*** Just voted EDGE\nWith ID: ${vote.user}`)
// //   .setTimestamp();
// // let U = client.channel.get('704011970478735450')
 

//   let user = client.users.get(vote.user) || await client.fetchUser(vote.user)
//    user.send("thanks for vote bot")
//   // await client.channels.get("702189119027281942").send(embed)
// //  let bal = require('../../database/balance.json');
// //   const fs = require('fs');
// //   // let user = client.users.get(vote.user) || await client.fetchUser(vote.user)
// // let amount = 10000
// // if(!bal[user.author.id]){
// //     bal[user.author.id] = {
// //       balance: 0
// //     };
// //   }
// //      let curBall = bal[user.author.id].balance;
// //     bal[user.author.id].balance = curBall + amount
// //   fs.writeFile('./src/database/balance.json', JSON.stringify(bal, null, 2), (err) => {
// //    user.send(`Hey **${user.author.id}**, You got \💲 **${amount}** now u have **${curBall + amount}**\n vote to get 10,000 coins`);
// //     if(err) console.log(err);  
// //   })

//   return client.channels.get('704011970478735450').send(`<@${vote.user}> Just Khlang bot \nWith ID: ${vote.user}`)

//   } catch (e) {
//     console.log(`Oh no an error occurred :( \`${e.message}\` try again later.`);
//   }
// });
//   // Optional events
// dbl.on('posted', () => {
//   console.log('Server count posted!');
// });

// dbl.on('error', e => {
//  console.log(`Oops! ${e}`);
// });
// server.listen(process.env.PORT, () => {
//   console.log('Listening');
//   console.log(process.env.PORT)
// });


const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOPGG_TOKEN, client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})