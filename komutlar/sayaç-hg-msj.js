const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => { 
const fronz = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<a:hypesquad:765831981568622602>   **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n**__Örnek__**: `${prefix}sayac-hg-msj -server-, Sunucumuza Hoşgeldin, -uye-! -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı!, **-uyesayisi-** Kişiyiz.`')
  
await message.channel.send('<a:hypesquad:765831981568622602>  **Sayaç Hoşgeldin mesajı**\n`'+mesaj+'`\nOlarak ayarlandı.') 
 db.set(`sayacHG_${message.guild.id}`, mesaj)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)
    
  
};
exports.config = {
  name: 'sayaç-hg-mesaj',
  aliases: ['sayac-hg-msg']
};

