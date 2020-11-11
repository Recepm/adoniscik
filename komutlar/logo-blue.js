const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'),
        invite = /(https:\/\/)?(www\.)?(discord\.gg|discord\.me|discordapp\.com\/invite|discord\.com\/invite)\/([a-z0-9-.]+)?/i;
  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`);
  const rekk = `https://habbofont.net/font/palooza_blue/${yazi.replace('i', 'I').replace('ç', 'C').replace('ö', 'O').replace('ş', 'S').replace('ğ', 'G')}.gif`
  .replace(' ', '+')
// LINK TURKCE KARAKTER DESTEKLEMİYOR ş ğ
    const rekembed = new Discord.MessageEmbed()
  .setTitle("Blue Logo")
  .setColor("#0affff")
  .setImage(rekk)
  .setFooter(ayarlar.footer)
  message.channel.send(rekembed)
}
exports.config = {
  name : "blue",
  aliases :['alternatifler']
}