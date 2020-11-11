 const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let gold = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Gold Komutları`, client.user.avatarURL())
.addField(`__Gold Durum__`,`<a:ayarlar:765832043460296755> \`${prefix}gold-durum\` Gold Üyeliğinizi Kontrol Edersiniz.`,true)
.addField(`__Gold Yap__`,`<a:ayarlar:765832043460296755> \`${prefix}goldyap\` Bot Sahibi Komutudur.`,true)
.addField(`__Gold Al__`,`<a:ayarlar:765832043460296755> \`${prefix}goldal\` Bot Sahibi Komutudur.`,true)
.addField(`__Goldlar__`,`<a:ayarlar:765832043460296755> \`${prefix}goldlar\` Bu Komut Yakında Eklenecektir. `,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
.setFooter(fronz.footer2)
 message.channel.send(gold) 
  };
exports.config = {
name: "gold",
  aliases: []
}