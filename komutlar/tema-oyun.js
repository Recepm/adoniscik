const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.oyun`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__1__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 1000}));
data.set(`${message.author.id}.zaman.oyun`, Date.now()+ms('1h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} <a:hypesquad:765831981568622602> **__Oyun Sunucunu__ Gönderdim DM'ne Bakar Mısın.**`));
message.author.send(`> <a:hypesquad:765831981568622602> **1 adet __Oyun__ sunucusu kurmak için tema geldi.**

> Güle güle kullan 😇

https://discord.new/49KVaWz83YQC`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.config = {
  name : "oyuntema",
  aliases :['alternatifler']
}