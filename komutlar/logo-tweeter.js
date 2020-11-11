const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?script=birdy-logo&_loc=generate&imageoutput=true&script=graffiti-logo&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Tweeter Logo")
  .setColor("#0affff")
  .setImage(linqo)
  .setFooter(ayarlar.footer)
  message.channel.send(embed)
}
exports.config = {
  name : "tweeter",
  aliases :['alternatifler', 'twitter']
}