const Discord = require("discord.js");
const fs = require("fs");
const AsciiTable = require('ascii-table')
const client = new Discord.Client();
require('discord-buttons')(client); 
const { MessageButton } = require('discord-buttons');

client.on('ready', () => {
  console.log("hazırım!")
 client.user.setPresence({
    activity: {
      name: `Ghost Development Button Role`,
      type: "COMPETING"
    },
    status: "idle"
  });
  });


// Ghost Dev: https://discord.gg/EVpmWHdkwG

client.on('message', async msg => {
  if (msg.content.toLowerCase() === '.partner') {

        let button =  new MessageButton()
        .setStyle("blurple")
        .setLabel('Click Button')
        .setID('rol')
        .setEmoji('✅')
        await msg.channel.send(`<@${msg.author.id}>`, button)
  }
})

client.on('clickButton', async button => {
if (button.id === 'rol') {
      await button.clicker.member.roles.add("ROL İD")
      await button.reply.send('✅ Rol Başarıyla Eklendi!', true);
    }
})




client.on('message', async msg => {
  if (msg.content.toLowerCase() === '.discord') {

        let button =  new MessageButton()
        .setStyle("blurple")
        .setLabel('Click Button')
        .setID('rol')
        .setEmoji('✅')
        await msg.channel.send(`<@${msg.author.id}>`, button)
  }
})

client.on('clickButton', async button => {
if (button.id === 'rol') {
      await button.clicker.member.roles.add("ROL İD")
      await button.reply.send('✅ Rol Başarıyla Eklendi!', true);
    }
})

client.on('message', async msg => {
  if (msg.content.toLowerCase() === `.help`) {
    
        let embed = new Discord.MessageEmbed()
          .setColor("BLURPLE")
          .setTitle('Discord Button Roles :zap:')
          .setDescription('Tüm komutlar aşağıdadır:')    
          .addField('.normal', 'Normal kodlar rolünü almak için kullan.')  
          .addField('.discord', 'Discord\'la ilgili güncellemeleri görmek için kullan.')              
          .addField('.partner', 'Partner kanallarını görmek için kullan.')
        return msg.channel.send(embed);
  }
})



module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  let prefix = "."; // prefix girin
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if(!message.guild) return;
    cmd.run(client, message, params);
  }
};


client.login('BOT_TOKEN')
