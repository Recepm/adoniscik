const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fronz = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix   
let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypesquad:765831981568622602> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!kanal) return message.channel.send(`<a:hypesquad:765831981568622602>  **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
  
 if(isNaN(args[1])) return message.channel.send(`<a:hypesquad:765831981568622602>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
 
 if(message.guild.memberCount > args[1]) return message.channel.send(`<a:hypesquad:765831981568622602>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)

 
  message.channel.send(`╔▬▬▬▬▬▬▬▬ Adonis Sayaç ▬▬▬▬▬▬▬▬▬
║► <a:hypesquad:765831981568622602> Sayaç Aktif Edildi.
║► <a:hypesquad:765831981568622602> **${args[1]}** Olarak Güncelledim! 
║► <a:hypesquad:765831981568622602> Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
║► <a:hypesquad:765831981568622602> ${args[1]} Kişi Olmaya Son :fire: **${kalan}** :fire: Kişi Kaldı!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
};

exports.config = {
  name: 'sayaç-ayarla',
  aliases: ["sayaçayarla"]
};

