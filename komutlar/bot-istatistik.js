const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let fronz = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/757234720898547840/766027502975189002/Adonis.jpg`)
.addField("__**Bot Verileri**__", `<a:hypesquad:765831981568622602> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad:765831981568622602> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad:765831981568622602> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
// .addField("__**Bot Geliştiricisi**__", `<a:hypesquad:765831981568622602> **Bot Sahibi**  <@495280166462029837> \n **Fronz#0027** \n <a:hypesquad:765831981568622602> **Bot Sahibi** <@424544845290536970> \n **Piece Clîes#0001**`)
.addField("__**Sürümler**__", `<a:hypesquad:765831981568622602> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad:765831981568622602> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:hypesquad:765831981568622602> **${client.ws.ping}** ms`,true)
.setColor("#0affff")
.setFooter(ayarlar.footer)
message.channel.send(fronz)
}

exports.config = {
name: "botbilgi",
aliases: []
}