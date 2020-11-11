const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fronz = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix  
 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
 if(!kanal) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin!**\n**__Örnek__**: ${prefix}kayıt-log-kanal-ayarla \`#kayıtLogKanal\``)
 
  await message.channel.send(`<a:hypesquad:765831981568622602> **Kayıt Log Kanalı** \`${kanal}\` olarak ayarlandı! `)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)

 
    db.set(`kayitLog_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'kayıt-log-kanal-ayarla', 
  aliases: []
};
