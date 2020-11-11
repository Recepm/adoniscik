const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let piece = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Yeni Eklenen Komutları`, client.user.avatarURL())
.addField(`__Sunucu Kur Sistemi__`,`<a:partner:765556521555197982> \`${prefix}sunucusistemi\` Gelişmiş Sunucu Kur Sistemi.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
.addField(`__Ayarlar Sistemi__`,`<a:partner:765556521555197982> \`${prefix}ayarlar\` Ayarlar Sistemimiz Bakıma Alınmıştır.`,true)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
.setFooter(fronz.footer)
 message.channel.send(piece)
  };
exports.config = {
name: "yenilikler",
  aliases: []
}
