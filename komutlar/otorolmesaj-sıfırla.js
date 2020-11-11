const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`<a:hypesquad:765831981568622602>  **Ayarlanmamış bir özellik sıfırlanamaz! :wink: **`)
 
 
  await message.channel.send(`<a:hypesquad:765831981568622602>  **Otorol mesajı başarılı bir şekilde sıfırlandı.**`)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.config = {
  name: 'otorol-mesaj-sıfırla',
  aliases: ["otorolmesajsıfırla"]
};
