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
    .setAuthor(message.author.username + ' Dön gel biraz da cennet özlesin seni.')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media1.giphy.com/media/Xc4dop7WgINtfqalR4/giphy.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atam'],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Atamızın gifini atar.',
  usage: 'atatürk'
};