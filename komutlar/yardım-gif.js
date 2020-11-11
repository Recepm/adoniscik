const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Gif Komutları`, client.user.avatarURL())
.addField(`__Gif Ara__`,`<a:partner:765556521555197982> \`${prefix}gifara\` Yazdığınız Kelime Hakkında Gif Aratır.`,true)
.addField(`__Man Gif__`,`<a:partner:765556521555197982> \`${prefix}man\` Rastgele Erkek Gifi Atar.`,true)
.addField(`__Woman Gif__`,`<a:partner:765556521555197982> \`${prefix}woman\` Rastgele Kadın Gifi Atar.`,true)
.addField(`__Couple Gif__`,`<a:partner:765556521555197982> \`${prefix}couple\` Rastgele Sevgili Gifi Atar.`,true)
.addField(`__Baby Gif__`,`<a:partner:765556521555197982> \`${prefix}baby\` Rastgele Bebek Gifi Atar!.`,true)
.addField(`__Anime Gif__`,`<a:partner:765556521555197982> \`${prefix}anime\` Rastgele Hayvan Gifi Atar.`,true)
.addField(`__Atatürk Gif__`,`<a:partner:765556521555197982> \`${prefix}atatürk\` Rastgele Atatürk Gifi Atar.`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
.setFooter(fronz.footer2)
 message.channel.send(eklenti)
  };
exports.config = {
name: "gif",
  aliases: []
}
