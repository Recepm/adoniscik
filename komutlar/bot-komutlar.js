const Discord = require('discord.js')

exports.run = async (client, message) => {
    
 await message.channel.send(`Şuanda **${client.commands.size}** komut bulunmakta!`)
 message.channel.send(`Daha fazla bilgi ve sorularınız için destek sunucumuz \`a!davet\``)
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

