const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Oto Rol Komutları`, client.user.avatarURL())
.addField(`__Oto Rol Ayarla__`,`<a:ayarlar:765832043460296755> \`${prefix}otorol-ayarla\` Sunucunuzda Otorol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`<a:ayarlar:765832043460296755> \`${prefix}otorol-kapat\` Sunucunuzdaki Otorol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`<a:ayarlar:765832043460296755> \`${prefix}otorol-mesaj\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla__`,`<a:ayarlar:765832043460296755> \`${prefix}otorol-mesaj-sıfırla\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti)
  };
exports.config = {
name: "otorol",
  aliases: []
}
