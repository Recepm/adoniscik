const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
let a = ayarlar.prefix
    let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`<a:hypesquad:765831981568622602> **Bu Komutu Kullanabilmek İçin **Yönetici** Yetkisine Sahip Olmalısınız** | **Şuanki Prefix:** ${p}`));
  
if(args[0] === "ayarla") {
if(o) { return message.channel.send(new Discord. MessageEmbed()
                                         .setColor("#0affff")
.setDescription(`**Ayarlanmış Şeyi Tekrar Ayarlıyamassın | Şuanki Prefix:** ${p} **Sıfırlamak İçin** ${p}**prefix sıfırla**`));
      }
if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
                                              .setColor("#0affff")
.setDescription(`<a:hypesquad:765831981568622602>  **Bir Prefix Girip Tekrar Dene |  Şuanki Prefix:** ${p}`));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed()
                          .setColor("#0affff")
.setDescription(`<a:hypesquad:765831981568622602>  **Prefix Başarıyla Ayarlandı | Şuanki Prefix:** ${args[1]}`));
}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("#0affff")
.setDescription(`<a:hypesquad:765831981568622602> **Ayarlanmayan Prefixi Sıfırlayamazsınız | Şuanki Prefix:** ${p}`));
    }
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
                                    .setColor("#0affff")
.setDescription(`<a:hypesquad:765831981568622602> **Prefix Başarıyla Sıfırlandı | Şuanki Prefix:** ${a}`));
  }
 
 if(!args[0]) return message.channel.send(new Discord.MessageEmbed()     
                  .setColor("#0affff")                             
.setDescription(`<a:hypesquad:765831981568622602> **Prefix Ayarlamak İçin** ${p}**prefix ayarla <prefix>**\n <a:hypesquad:765831981568622602> **Sıfırlamak İçin** ${p}**prefix sıfırla | Şuanki Prefix:** \`${p}\``));
  
};
exports.config = {
name: "prefix",
aliases: ['p']
};