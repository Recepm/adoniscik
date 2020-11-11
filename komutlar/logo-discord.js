const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?script=adidas-logo&fontname=ethnocentric&text=${yazi}&script=adidas-logo&text=Discord&fontname=ethnocentric&fillTextColor=%236d81e7&fillOutlineColor=%23fbfaf9&shadowType=0&backgroundRadio=0&imageoutput=true`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Discord Logo")
  .setColor("#0affff")
  .setImage(linqo)
  .setFooter(ayarlar.footer)
  message.channel.send(embed)
}
exports.config = {
  name : "discord",
  aliases :['alternatifler']
}