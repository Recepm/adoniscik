 const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Eklenti Komutları`, client.user.avatarURL())
.addField(`__Kayıt Sistemi__`,`<a:ayarlar:765832043460296755> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`<a:ayarlar:765832043460296755> \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__OtoCevap Sistemi__`,`<a:ayarlar:765832043460296755> \`${prefix}otocevap\` Gelişmiş OtoCevap Sistemi`,true)
.addField(`__Logo Sistemi__`,`<a:partner:765556521555197982> \`${prefix}logo\` Gelişmiş Logo Generator.`,true)
.addField(`__Gif Sistemi__`,`<a:partner:765556521555197982> \`${prefix}gif\` Gelişmiş Gif Generator.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
.setFooter(fronz.footer2)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "eklenti",
  aliases: []
}