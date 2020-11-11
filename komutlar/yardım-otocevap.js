const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Oto Cevap Komutları`, client.user.avatarURL())
.addField(`__Oto Cevap Ekle__`,`<a:ayarlar:765832043460296755> \`${prefix}otocevap-ekle\` Sunucunuza Özel Komut Eklemenize Yarar.`,true)
.addField(`__Oto Cevap Liste__`,`<a:ayarlar:765832043460296755> \`${prefix}otocevap-liste\` Sunucunuzdaki Özel Komutların Listesini Gösterir.`,true)
.addField(`__Oto Cevap Sil__`,`<a:ayarlar:765832043460296755> \`${prefix}otocevap-sil\` unucunuzdaki Özel Komutu Siler.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otocevap",
  aliases: []
}
