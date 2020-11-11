const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

if (db.has(`üyelikk_${message.author.id}`)) {
   message.reply(`Gold Üye Durumu: \`Aktif!\``)
 } else
  message.reply('Sistemde Gold üyeliğiniz bulunmamakta!')
};

exports.config = {
name: "golddurum",
aliases: ['gold-durum']
};    