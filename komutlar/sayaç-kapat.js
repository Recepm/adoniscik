const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`sayacS_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:hypesquad:765831981568622602>  **Bu özellik zaten kapalı! :wink: **`)
 
 
await  message.channel.send(`<a:hypesquad:765831981568622602>  **Sayaç başarılı bir şekilde kapatıldı.**`)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)

 
  db.delete(`sayacS_${message.guild.id}`)  
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacBB_${message.guild.id}`) 
  db.delete(`sayacHG_${message.guild.id}`)  
};
exports.config = {
  name: 'sayaç-kapat',
  aliases: ["sayac-kapat"]
};
