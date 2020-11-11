const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`kayitKanal_${message.guild.id}`)  
 if(!rol) return message.channel.send(`<a:hypesquad:765831981568622602>  **Bu özellik zaten kapalı! :wink: **`)
 
 
 await message.channel.send(`<a:hypesquad:765831981568622602>  **Kayıt Sistemi başarılı bir şekilde kapatıldı.**`)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)

 
  db.delete(`kayitAR_${message.guild.id}`)  
  db.delete(`kayitVR_${message.guild.id}`) 
  db.delete(`kayitLog_${message.guild.id}`)  
  db.delete(`kayitKanal_${message.guild.id}`)  
  db.delete(`isimtemizleyiciK_${message.guild.id}`)  
};
exports.config = {
  name: 'kayıt-sistemi-kapat',
  aliases: []
};
