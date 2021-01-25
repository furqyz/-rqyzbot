const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Sunucu Şablon Menüsü')
.setTimestamp()
.addField('ᴪ r!nitrosatış-kur', 'Etiketlediğiniz kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!galeri-kur', 'Etiketlediğiniz kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!sohbeteğlence-kur', 'Etiketlediğiniz kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!kodpaylaşım-kur', 'Etiketlediğiniz kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!oyunsohbet-kur', 'Etiketlediğiniz kullanıcıyı sunucudan banlar.')
.setFooter('© 2020 *efq Bot', client.user.avatarURL())
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
