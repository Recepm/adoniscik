const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  const victim = message.mentions.users.first() || client.users.cache.get(args[0]) || await client.users.fetch(args[0]);
  if(!victim) victim = message.author;
  message.channel.send([
    `\`${victim.tag}\` kullanıcısının avatarı:`,
    victim.avatarURL({ dynamic : true, size: 1024 })
  ]);
};

exports.config = {
  name: 'avatar',
  aliases: []
};