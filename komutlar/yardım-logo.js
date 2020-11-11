const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Logo Komutları`, client.user.avatarURL())
.addField(`__Arrow Logo__`,`<a:partner:765556521555197982> \`${prefix}arrow\` Ok Şeklinde Logo Üretir.`,true)
.addField(`__Blue Logo__`,`<a:partner:765556521555197982> \`${prefix}blue\` Mavi Logo Üretir`,true)
.addField(`__Booking Logo__`,`<a:partner:765556521555197982> \`${prefix}booking\` Kırmızı Logo Üretir`,true)
.addField(`__Bubble Logo__`,`<a:partner:765556521555197982> \`${prefix}bubble\` Mavi Logo Üretir`,true)
.addField(`__Bubble2 Logo__`,`<a:partner:765556521555197982> \`${prefix}bubble2\` Turuncu Logo Üretir`,true)
.addField(`__Bubble3 Logo__`,`<a:partner:765556521555197982> \`${prefix}bubble3\` Rainbow Logo Üretir`,true)
.addField(`__Green Logo__`,`<a:partner:765556521555197982> \`${prefix}green\` Yeşil Logo Üretir`,true)
.addField(`__Discord Logo__`,`<a:partner:765556521555197982> \`${prefix}discord\` Discord Logo Üretir`,true)
.addField(`__Fire Logo__`,`<a:partner:765556521555197982> \`${prefix}fire\` Ateşli Logo Üretir`,true).addField(`__Gold Logo__`,`<a:partner:765556521555197982> \`${prefix}gold\` Gold Logo Üretir`,true)
.addField(`__Gold2 Logo__`,`<a:partner:765556521555197982> \`${prefix}gold2\` Gold2 Logo Üretir`,true)
.addField(`__Fire Logo__`,`<a:partner:765556521555197982> \`${prefix}fire\` Ateş Logo Üretir`,true)
.addField(`__Graffiti Logo__`,`<a:partner:765556521555197982> \`${prefix}graffiti\` Graffiti Logo Üretir`,true)
.addField(`__Fire Logo__`,`<a:partner:765556521555197982> \`${prefix}fire\` Ateşli Logo Üretir`,true)
.addField(`__Harry Poter Logo__`,`<a:partner:765556521555197982> \`${prefix}harry\` Harry Poter Logo Üretir`,true)
.addField(`__Tweeter Logo__`,`<a:partner:765556521555197982> \`${prefix}tweeter\` Tweeter Logo Üretir`,true)
.addField(`__StarWars Logo__`,`<a:partner:765556521555197982> \`${prefix}starwars\` StarWars Logo Üretir`,true)
.addField(`__Flaming Logo__`,`<a:partner:765556521555197982> \`${prefix}flaming\` Flaming Logo Üretir`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setThumbnail(client.user.avatarURL)
.setFooter(fronz.footer2)
 message.channel.send(eklenti)
  };
exports.config = {
name: "logo",
  aliases: []
}
