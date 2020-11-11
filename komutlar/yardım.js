 const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let piece = new Discord.MessageEmbed()  
.setAuthor(`Adonis Yardım Menüsü`, client.user.avatarURL())
.setColor('#0affff')
.addField(`__Genel Komutlar__`,`<a:partner:765556521555197982> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:ayarlar:765832043460296755> \`${prefix}moderasyon\` `,true)
.addField(`__Gold Komutlar__`,`<a:hypesquad:765831981568622602> \`${prefix}gold\` `,true)
.addField(`__Müzik Komutları__`,`<a:partner:765556521555197982> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:ayarlar:765832043460296755> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hypesquad:765831981568622602> \`${prefix}prefix\` `,true)
.addField(`__Yeni Eklenen Komutlar__`,`<a:partner:765556521555197982> \`${prefix}yenilikler\` `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setFooter(fronz.footer2)
.setThumbnail(client.user.avatarURL)
 message.channel.send(piece) 
  };
exports.config = {
name: "yardım",
  aliases: ["help"]
}// PİÇ NİYE PİECE NAPIYON FRONZDU 
// sus siekrim