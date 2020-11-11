const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Fire Logo")
  .setColor("#0affff")
  .setImage(linqo)
  .setFooter(ayarlar.footer)
  message.channel.send(embed)
}
exports.config = {
  name : "fire",
  aliases :['alternatifler']
}