  const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fronz = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix   
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<a:hypesquad:765831981568622602>  **Bu komutu kullanabilmek için "\`SUNUCUYU YÖNET\`" yetkisine sahip olmalısın.**`);
  
 if(!kanal) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin**\n **__Örnek__**: ${prefix}kayıt-kanal-ayarla \`#kayitkanal\``)
 
  await message.channel.send(`<a:hypesquad:765831981568622602>  **Kayıt kanalı** \`${kanal}\` **olarak ayarlandı!** `)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)
  db.set(`kayitKanal_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'kayıt-kanal-ayarla', 
  aliases: []
};

