const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' Ne Mutlu Türküm Diyene!')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media2.giphy.com/media/yDm4Ry6XU77Py/giphy.gif?cid=ecf05e477pa0rvec7h6woragt889wvc0l9o02mdo919utkns&rid=giphy.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['türkiyem'],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: 'Türk bayrağı atar',
  usage: 'bayrak'
};