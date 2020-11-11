const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<a:ayarlar:765832043460296755> Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın.')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:ayarlar:765832043460296755> **Mod Log Kanalı Ayarlanmamış Ayarlamak için**  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:ayarlar:765832043460296755> **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:ayarlar:765832043460296755> **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:ayarlar:765832043460296755> **Gerçekten kendini mi sunucudan atmaya çalıştın yoksa bozuluyor muyum?**');

  const embed = new Discord.MessageEmbed()
  .setColor("#0affff")
  .addField('<a:ayarlar:765832043460296755> İşlem', 'Sunucudan Kickleme')
  .addField('<a:ayarlar:765832043460296755> Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('<a:ayarlar:765832043460296755> Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:ayarlar:765832043460296755> Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("#0affff")
  .setDescription(`<a:ayarlar:765832043460296755> **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

