const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Genel Komutlar`, client.user.avatarURL())
.addField(`__Komut Sayısı__`,`<a:hypesquad:765831981568622602> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Profil__`,`<a:hypesquad:765831981568622602> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:hypesquad:765831981568622602> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:hypesquad:765831981568622602> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
.setFooter(fronz.footer2)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
