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
    .setAuthor(message.author.username + ' Polis ekibi geliyor sakin ol !')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://usatsneakhype.files.wordpress.com/2015/03/dubai-police-cars-lead.gif?w=640&h=360&crop=1`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['polis', '155', 'polisi-ara', 'polisi ara'],
  permLevel: 0
};

exports.help = {
  name: 'polisiara',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polisiara'
};