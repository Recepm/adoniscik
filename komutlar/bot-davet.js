const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#0affff")
.setAuthor(`Adonis Linkler`, client.user.avatarURL())
.setDescription('**• [Adonis`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=765535600291610624&scope=bot&permissions=8)**\n\n**• [Destek Sunucusu](https://discord.gg/dyguB2B)**\n\n**• [Adonis WebSitesi (Yapım aşamasında!)](https://adonisbotsite.glitch.me)**')
.setFooter(ayarlar.footer) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };