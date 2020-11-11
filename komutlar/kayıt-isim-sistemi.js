const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fronz = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix   

  let mesaj = args.slice(0).join(' ');
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
if (mesaj.length <= 3) {
return message.channel.send(`<a:hypesquad:765831981568622602> İsim Sistemini Ayarlayabilmek İçin En Az 3 Karakter Belirtebilirsiniz.**\n**__Örnek__**: \`${prefix}isim-sistemi [-uye-]\` ya da \`${prefix}isim-sistemi [-uye-]|[-yas-]\``) 
}

db.set(`isimsistemi_${message.guild.id}`, mesaj)
 await message.channel.send(`<a:hypesquad:765831981568622602>  **Kayıt Olan Kullanıcıların İsimleri** \`${mesaj}\` Olarak Ayarlanacaktır.`)
  message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)
};

exports.config = {
  name: 'isim-sistemi',
  aliases: ["isimsistemi"]
};
