const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`<a:hypesquad:765831981568622602> **Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`<a:hypesquad:765831981568622602> Bunumu Arıyorsun? \n ${prefix}reklam-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '<a:hypesquad:765831981568622602> **Reklam Engel Aktif!**')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
      .setColor("#0affff")
    .setDescription('<a:hypesquad:765831981568622602> **Reklam Engeli Açtım**')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:hypesquad:765831981568622602> **Reklam Engeli Kapattım**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.config = {
 name: 'reklamengel',
  aliases: ['reklam-engel']

};
