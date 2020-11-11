const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');

exports.run = (client, message, args) => {
     if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:hypesquad:765831981568622602>  **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);

	if (!message.guild) return message.author.send('<a:hypesquad:765831981568622602> **Bu Komutu Sunucuda Kulanabilirsiniz**');

    let kullanici = args[0];
    if (!kullanici) return message.channel.send("<a:hypesquad:765831981568622602> **Banlanan Bir kullanıcının ID'sini belirtmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`<a:hypesquad1:765831981568622602> **Bu kullanıcı banlanmamış.**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

const Embed = new Discord.MessageEmbed()
 .setColor('#0affff')
.setAuthor('Adonis | Ban Sorgulama', client.user.avatarURL())
.setFooter(ayarlar.footer2)
.setDescription(`<a:hypesquad:765831981568622602> ${user.tag} **Adlı Kullanıcının Ban Nedeni:** \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.channel.send(Embed)
    })
    }

exports.config = {
    name: 'bansorgulama',

    aliases: ['bansorgu','ban-sorgulama','ban-sorgu']
};


