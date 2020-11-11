const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const ayarlar = require("../ayarlar/bot.json");
module.exports.run = async (bot, message, args) => {
 
  if(message.author.id !== "424544845290536970") return message.channel.send('**Bu komutu sadece geliştiricilerim kullanabilir!**')    
   if(message.guild.id !== "766255567928033351") return message.reply("Bu komut sadece destek sunucumda çalışır.");
  
  let nesne = args[0]
  if (!nesne) return message.reply('Gold üyeliği alınacak kişinin ID girmelisin!')
  
  db.delete(`üyelikk_${nesne}`)
  message.guild.members.cache.get(nesne).roles.remove('766607421766107196')
  
  message.channel.send(`<@${nesne}> **${nesne}** ID'li kişinin gold üyeliği alındı!`)
  if (message.client.users.cache.get(''+nesne+'').send(`Gold üyeliğiniz alınmıştır!`)){
 
} else return
  message.client.channels.cache.get('766598349948059649').send(`<@${nesne}> \`${nesne}\` kişisinin Gold Üyeliği Alındı! (Artık gold üye değil!)`)
};

exports.config = {
name: "goldal",
aliases: ['gold-al']
};  