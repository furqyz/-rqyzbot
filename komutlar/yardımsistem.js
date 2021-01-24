const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Sistem Menüsü')
.setTimestamp()
.addField('ᴪ r!kayıt-sistemi', 'Sunucunuza kayıt sistemi kurabilirsiniz.')
.addField('ᴪ r!ototag','Sunucuya gelenlere otomatik tag verir.')
.addField('ᴪ r!ototagkapat','Sunucuya gelenlere otomatik tag vermez.')
.addField('ᴪ r!otorol-ayarla','Sunucuya gelenlere otomatik oto rol verir.')
.addField('ᴪ r!otorolkapat','Otorol sistemini devredışı bırakır.')
.addField('ᴪ r!sayaç','Sayaç sistemini aktif/deaktif eder.')
.addField('ᴪ r!sohbet-aç','Belirtilen kanala yazı yazılmasını sağlar.')
.addField('ᴪ r!sohbet-kapat','Belirtilen kanala yazı yazılmasını yasaklar.')
.addField('ᴪ r!sunucu-kur','Kendinize özel bir sunucu kurarsınız.(Roller / Kanallar - Dikkatli olun önceki her şey siliniz.)')
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
  name: 'sistem',
  description: 'Tüm komutları gösterir.',
  usage: 'sistem'
};
