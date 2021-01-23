const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('!rqyz Yardım Menüsü')
.setTimestamp()
.addField('<a:mode:798636415487311922> r!moderasyon', 'Moderasyon menüsünü açar.')
.addField('<a:mode:798636415487311922> r!sistem', 'Sunucu sistem menüsünü açar.')
.addField('<a:mode:798636415487311922> r!eğlenceli', 'Eğlence menüsünü açar.')
.addField('<a:mode:798636415487311922> r!diğer', 'Bazı konular hakkında bilgi alırsınız.')
.addField('<a:mode:798636415487311922> r!hakkında', 'Davet linkimi, destek sunucumu, hata/öneri sistemini ve istatistiğimi görebilirsin.')
.setImage("https://media.giphy.com/media/Y9sJa6W9mMZ0crNLfQ/giphy.gif")
.setFooter('© 2020 @furqyz', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["help","yardim"], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
