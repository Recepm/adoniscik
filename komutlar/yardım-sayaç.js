 const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Adonis Sayaç Komutları`, client.user.avatarURL())
.setColor('#0affff')
.addField(`__Sayaç Ayarla__`,`<a:ayarlar:765832043460296755> \`${prefix}sayaç-ayarla\` Sunucunuzda Sayacı Ayarlar.`,true)
.addField(`__Sayaç Hg Mesaj__`,`<a:ayarlar:765832043460296755> \`${prefix}sayaç-hg-mesaj\` Sunucunuzdaki Sayacın Hoş Geldin Mesajını Ayarlar.`,true)
.addField(`__Sayaç Bb Mesaj__`,`<a:ayarlar:765832043460296755> \`${prefix}sayaç-bb-mesaj\` Sunucunuzdaki Sayacın Görüşürüz Mesajını Ayarlar.`,true)
.addField(`__Sayaç Kapat__`,`<a:ayarlar:765832043460296755> \`${prefix}sayaç-kapat\` Sunucunuzda Sayacı Devre Dışı Bırakır.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "sayaç",
  aliases: []
}