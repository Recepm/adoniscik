const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://cdn.discordapp.com/attachments/694694493525377035/737302021295833109/GIF-200727_113742.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302739444301824/wqeqw.gif","https://cdn.discordapp.com/attachments/694694493525377035/737303378173886554/a_14254a7b0842b2a7f32a19cb34028da4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302765520551946/a_dfda87717edc3a1ee1057aec5304f082.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310262906060810/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310178180989009/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737300958031380549/a_e052cc1eb09b212fa6b4c3644450b154.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301552750002226/rosiegif4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301813912666145/gif_342.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301817615974471/GIF.5.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301870971846687/gif_346.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301916379381790/gif_335.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021018333249546/Lorie10.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021142547693618/a_3a35e998e21a471ca9999b2e78051d53.gif","https://cdn.discordapp.com/attachments/694694493525377035/737036899612360774/a_0edcde786dca1aa7cb3caf12af732bc5.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666585565036564/a_faf111b6f52a888cbbb94f81dbd953f1.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666604644663326/a_5ceeb55dc177526bade3f10e5f7aaaf2.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666621120020510/a_2fa3d6b37927ad11fd001ce8d9558cec.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666625084162088/a_e609be84bc9330464fe144f7d3645237.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666640606887986/a_74729ee2455b0f7f4728d598ea313573.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666647163109396/a_013d4d4c52c9b2496951a1e8f2476e45.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666677047525427/a_1191c377443264f3117b47f73a6e18a2.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666679483629599/a_6441a2c4bc7c8fa3209151405a4980de.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666683229536256/a_2046682d0c88aca7c9f7d3e9bb323952.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666685964877864/a_31599706db9e94fffc0e938bee80bd5c.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666696072233010/a_245e51d1a9ab6919d5f26134315c245f.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666696114831391/a_d2c0653a4417a3aa217841635698fcfa.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666707456491581/a_13077d951910582b6049bc046475b265.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666708983218186/a_40d82517f0889ef9be523851e383fbaa.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666714476838932/a_322301819f8764d12a9a9f812e706da7.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666714473300028/a_808a20958ced77b02a915b548a8dd242.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666722379300924/a_1773539933a3097aa1d5b2071c001ea7.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666723653976095/a_273727d00ccb865302b376a8e1c4626e.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666744302796810/a_8608a4740cea3c4e888cbb1c97db37d0.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666864507879454/20191207_164853.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666787743858738/a_0283164a871def3159db33356c4c6f3e.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666764980322324/a_1847cc035d8150897dc7951cae92eb6d.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666774807576576/a_87d57dde3a8f1fe3bf4584e702e2e603.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666808500682772/a_7617aac61cd0eee7a372e6644e8c2a52.gif","https://cdn.discordapp.com/attachments/762945680645685248/766666790503710720/a_cb4f3fb40644234a37e1df8ccbe4847a.gif"];
    let result = Math.floor((Math.random() * replies.length));

  const gifembed = new Discord.MessageEmbed()
        .setTitle("Woman Gif ;")
        .setColor("#0affff")
        .setFooter(`${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};
exports.config = {
  name : "woman",
  aliases :['alternatifler']
}