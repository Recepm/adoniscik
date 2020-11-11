const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/762945680645685248/766366510519287838/7.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366515594264596/8.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366519160078346/12.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366526520819722/11.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366527942819860/9.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366541138624512/4.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366542366507038/16.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366546733826109/6.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366547836141608/5.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366549409792100/15.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366561249787924/13.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366567512014848/3.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366572062965840/10.gif","https://cdn.discordapp.com/attachments/762945680645685248/766366585748717618/14.gif"]
    let result = Math.floor((Math.random() * replies.length));

  const gifembed = new Discord.MessageEmbed()
        .setTitle("Atatürk Gif ;")
        .setColor("#0affff")
        .setFooter(`${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};
exports.config = {
  name : "atatürk",
  aliases :['alternatifler']
}