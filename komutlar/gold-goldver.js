const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "424544845290536970") return message.channel.send('**Bu komutu sadece geliştiricilerim kullanabilir!**')    
   if(message.guild.id !== "766255567928033351") return message.reply("Bu komut sadece destek sunucumda çalışır.");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.reply('Gold üye yapılacak kullanıcının ID girmelisin!')
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.guild.members.cache.get(nesne).roles.add('766607421766107196')
  
  message.channel.send(`<@${nesne}> **${nesne}** ID'li kişiye gold üyelik verildi!`)
 message.client.channels.cache.get('766598349948059649').send(`<@${nesne}> \`${nesne}\` kişisine Gold üyelik verildi! (Artık Gold üye!)`)
if (message.client.users.cache.get(''+nesne+'').send(`\`Gold üyeliğiniz başarıyla verildi!\``)){
 
} else return
  
}

exports.config = {
name: "goldver",
aliases: ['gold-ver', 'goldyap', 'gold-yap']
};  