const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
const datas = await data.fetch(`${message.author.id}.zaman.public`);
if(Date.now() < datas) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`${message.author} **__1__ saat de bir kullanabilirsiniz!**`)).then(m => m.delete({timeout: 1000}));
data.set(`${message.author.id}.zaman.public`, Date.now()+ms('1h'));
message.channel.send(new Discord.MessageEmbed()
.setDescription(`${message.author} <a:hypesquad:765831981568622602> **__j4j sunucunu__ Gönderdim DM'ne Bakar Mısın.**`));
message.author.send(`> <a:hypesquad:765831981568622602> **1 adet __J4j__ sunucu kurmak için tema geldi.**

> Güle güle kullan 😇

https://discord.new/94jf299FvB8k`).catch(error => message.channel.send(new Discord.MessageEmbed().setDescription("Mesajı gönderemedim. Muhtemelen DM'n kapalı.")));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.config = {
  name : "j4jtema",
  aliases :['alternatifler']
}