const Discord = require('discord.js');
const request = require('request')
const fronz =require("../ayarlar/bot.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`<a:hypesquad:765831981568622602>  **Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.**`);

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fronz.prefix 
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad:765831981568622602> **Doğru kullanım:**   \`${prefix}yavaşmod [0/120]\``)
                .setColor("#0affff")
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("**Süre limiti maksimum** **120** **saniye olabilir.**").setColor("#0affff"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`<a:hypesquad:765831981568622602> **Yazma süre limiti** **${limit}** **saniye olarak ayarlanmıştır**`).setColor("#0affff"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
exports.config = {
name: "yavaşmod",
aliases: ["slowmode", "yavaşmod"]
}