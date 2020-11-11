const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fronz = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:hypesquad:765831981568622602>  **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla #kanal <Rol>\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!kanal) return message.channel.send(`<a:hypesquad:765831981568622602>  **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬ Adonis Otorol ▬▬▬▬▬▬▬▬▬
║► <a:hypesquad:765831981568622602> Otorol Aktif Edildi.
║► <a:hypesquad:765831981568622602> **${rol}** Olarak Güncelledim! 
║► <a:hypesquad:765831981568622602> Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'otorol-ayarla',
  aliases: []
};
