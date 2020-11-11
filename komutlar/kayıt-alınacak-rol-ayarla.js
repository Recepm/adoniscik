const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fronz = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix   
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:hypesquad:765831981568622602>  **Kayıt Tamamlandığı Zaman Alınacak Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz!**\n**__Örnek__**: \`${prefix}kayıt-alınacak-rol-ayarla @AlınacakRol\``)
 
 await message.channel.send(`<a:hypesquad:765831981568622602>  **Kayıt Olan Kullanıcılardan Alınacak Otomatik Rol** \`${rol}\` **Şeklinde Ayarlandı!**`)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)

 
  db.set(`kayitAR_${message.guild.id}`, rol.id)  
};
exports.config = {
  name: 'kayıt-alınacak-rol-ayarla',
  aliases: []
};
