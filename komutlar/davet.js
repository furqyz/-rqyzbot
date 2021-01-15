const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("RANDOM")
    .addField("<a:zil:798637076445659157> **Botun Sahibi**", "<@!778382988786401280>| * eғq#6767 ")
    .addField("**<a:zil:798637076445659157> Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/Gg68CB4mDq)", )
    .addField("**<a:zil:798637076445659157> Davet Linki**", " [Botu Davet Et](https://top.gg/bot/791704997699518494)", )
      .setImage("https://media.giphy.com/media/KFNSNhuR2JZfJl6Z0o/giphy.gif")
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(chrome);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};
