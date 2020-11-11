const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Sunucu Kur Komutları`, client.user.avatarURL())
.addField(`__J4j Sunucu__`,`<a:ayarlar:765832043460296755> \`${prefix}j4jtema\` J4j Sunucu Tema Atar.`,true)
.addField(`__Oyun Sunucu__`,`<a:ayarlar:765832043460296755> \`${prefix}oyuntema\` Oyun Sunucu Tema Atar.`,true)
.addField(`__Sohbet Sunucusu__`,`<a:ayarlar:765832043460296755> \`${prefix}sunucu-kur\` Sohbet Sunucusu Kurar.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti)
  };
exports.config = {
name: "sunucusistemi",
  aliases: []
}
