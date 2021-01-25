const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Eğlence Menüsü')
.setTimestamp()
.addField('ᴪ r!adamasmaca', 'Adam asmaca oynayabilirsiniz.')
.addField('ᴪ r!yazı-tura', 'Yazı tura oynayabilirsiniz.')
.addField('ᴪ r!aşkölçer', 'Arkadaşınızla sevginizi ölçebilirsiniz.')
.addField('ᴪ r!tkm', 'Taş, kağıt, makas oynarsınız.')
.addField('ᴪ r!zarat', 'Zar atarsınız.')
.addField('ᴪ r!8ball', '8ball oynayabilirsiniz.')
.addField('ᴪ r!balıktut', 'Balık tutabilirsin.')
.addField('ᴪ r!kartopu', 'Kartopu atarsınız.')
.addField('ᴪ r!slots2', 'Slot oynarsınız.')
.addField('ᴪ r!şanslısayım', 'Şanslı sayınızı görebilirsiniz.')
.addField('ᴪ r!sayı-tahmin','0-100 arasında tahmin yürütürsünüz.')
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
  name: 'oyunlar',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'oyunlar'
};
