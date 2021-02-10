const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Sistem Menüsü')
.setTimestamp()
.addField('ᴪ r!kayıt-sistemi', 'Sunucunuza kayıt sistemi kurabilirsiniz.')
.addField('ᴪ r!küfür-engel', 'Küfür engel sistemini açarsınız.')
.addField('ᴪ r!reklam-engel', 'Reklam engel sistemini açarsınız.')
.addField('ᴪ r!ticket-kanal','Ticket kanalını seçersiniz')
.addField('ᴪ r!ototag','Sunucuya gelenlere otomatik tag verir.')
.addField('ᴪ r!ototagkapat','Sunucuya gelenlere otomatik tag vermez.')
.addField('ᴪ r!otorol-ayarla','Sunucuya gelenlere otomatik oto rol verir.')
.addField('ᴪ r!otorolkapat','Otorol sistemini devredışı bırakır.')
.addField('ᴪ r!sayaç','Sayaç sistemini aktif/deaktif eder.')
.addField('ᴪ r!sayaç','Bota istediğiniz prefixi atayabilirsiniz.')
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
  name: 'sistem',
  description: 'Tüm komutları gösterir.',
  usage: 'sistem'
};
