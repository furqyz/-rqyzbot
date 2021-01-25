const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Sunucu Şablon Menüsü')
.setTimestamp()
.addField('ᴪ r!nitrosatış-kur', 'Nitro ve diğer item satış sunucusu kurar.')
.addField('ᴪ r!galeri-kur', 'Gif / Fotoğraf paylaşım sunucusu kurar.')
.addField('ᴪ r!sohbeteğlence-kur', 'Sohbet / Eğlence sunucusu kurar.')
.addField('ᴪ r!kodpaylaşım-kur', 'Discord botları için kod paylaşım sunucusu kurar.')
.addField('ᴪ r!oyunsohbet-kur', 'Oyun / Sohbet sunucusu kurar.')
.setFooter('© 2020 @!rqyz', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};


exports.help = {
  name: 'sunucu-kur',
  description: 'Tüm komutları gösterir.',
  usage: 'sunucu-kur'
};
