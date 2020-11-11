// const db = require("quick.db");
// const Discord = require('discord.js');
// const fronz = require("../ayarlar/bot.json");
// exports.run = async (client, message, args) => { 
// let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
// let eklenti = new Discord.MessageEmbed()  
// .setColor('#0affff') 
// .setAuthor(`Adonis Müzik Komutları`, client.user.avatarURL())
// .addField(`__Müzik Oynat__`,`<a:partner:765556521555197982> \`${prefix}oynat\` İstediğiniz Şarkıyı Başlatır`,true)
// .addField(`__Müziği Duraklat__`,`<a:partner:765556521555197982> \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
// .addField(`__Müziği Devam Ettir__`,`<a:partner:765556521555197982> \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
// .addField(`__Müziği Geç__`,`<a:partner:765556521555197982> \`${prefix}atla\` Şarkıyı Atlar`,true)
// .addField(`__Müziği Durdur__`,`<a:partner:765556521555197982> \`${prefix}durdur\` Şarkıyı Kapatıp Odadan Çıkar`,true)
// .addField(`__Müzik Kuyruğu__`,`<a:partner:765556521555197982> \`${prefix}kuyruk\` Şarkı Kuyruğunu Gösterir`,true)
// .addField(`__Müzik Döngüsü__`,`<a:partner:765556521555197982> \`${prefix}döngü\` Şarkıyı Döngüye Sokar`,true)
// .addField(`__Ses Seviyesi__`,`<a:partner:765556521555197982> \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
// .addField(`__Kuyruğu Temizle__`,`<a:partner:765556521555197982> \`${prefix}kuyruk-temizle\` Kuyruk Listesini Temizler`,true)
// .addField(`__Kuyruğu Karıştır__`,`<a:partner:765556521555197982> \`${prefix}karıştır\` Kuyruktaki Şarkıları Karıştırır`,true)
// .addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
//   .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
// .setThumbnail(client.user.avatarURL)
//  message.channel.send(eklenti) 
//   };
// exports.config = {
// name: "müzik",
//   aliases: []
// }
const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setDescription(`Müzik komutlarımız şuanda **bakımdadır**. En kısa sürede aktif olacaktır.\nNot: Deneyip/kullandığınız hiçbir müzik komudu dönüş yapsa dahi çalışmayacaktır.`)
.setFooter(fronz.footer2)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzik",
  aliases: []
}
