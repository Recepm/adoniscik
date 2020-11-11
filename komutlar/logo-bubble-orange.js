const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://habbofont.net/font/bubble_orange/${yazi}.gif`
  .replace(' ', '+')

  
  const piecebubble2 = new Discord.MessageEmbed()
  .setTitle("Bubble Logo")
  .setColor("#0affff")
  .setImage(linqo)
  .setFooter(ayarlar.footer)
  message.channel.send(piecebubble2)
}
exports.config = {
  name : "bubble2",
  aliases :['alternatifler']
}