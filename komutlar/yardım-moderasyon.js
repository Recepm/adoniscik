
 const db = require("quick.db");
const Discord = require('discord.js');
const fronz = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#0affff') 
.setAuthor(`Adonis Moderasyon Komutları`, client.user.avatarURL())
.addField(`__Sayaç__`,`<a:ayarlar:765832043460296755> \`${prefix}sayaç\` Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`,true)
.addField(`__Otomatik Rol__`,`<a:ayarlar:765832043460296755> \`${prefix}otorol\` Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`<a:ayarlar:765832043460296755> \`${prefix}ban\` Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`<a:ayarlar:765832043460296755> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`<a:ayarlar:765832043460296755> \`${prefix}unban\` yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:ayarlar:765832043460296755> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`<a:ayarlar:765832043460296755> \`${prefix}bansay\` Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`<a:ayarlar:765832043460296755> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`<a:ayarlar:765832043460296755> \`${prefix}küfürengel\` Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Reklam Engel__`,`<a:ayarlar:765832043460296755> \`${prefix}reklamengel\` Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`<a:ayarlar:765832043460296755> \`${prefix}reklam-kick\` Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`<a:ayarlar:765832043460296755> \`${prefix}sil\` Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`<a:ayarlar:765832043460296755> \`${prefix}yavaşmod\` Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`<a:ayarlar:765832043460296755> \`${prefix}sa-as\` Sunucuzda Selam Verenlere Selam Der`,true)
.addField(`__Yasaklı Tag__`,`<a:ayarlar:765832043460296755> \`${prefix}yasaklı-tag\` Sunucuza Belirli Taga Sahip Üyeler Giremez`,true)
.addField(`__Bilgilendirme__`,`<a:hypesquad:765831981568622602> \`${prefix}davet\` | Adonis'i Sunucunuza Davet Edersiniz\n<a:hypesquad:765831981568622602> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir`)
  .setImage(`https://cdn.discordapp.com/attachments/757234720898547837/765837022132699166/standard_1.gif`)
.setFooter(fronz.footer2)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "moderasyon",
  aliases: []
}
