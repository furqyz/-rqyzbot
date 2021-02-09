const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Bağımsız Menü')
.setTimestamp()
.addField('ᴪ r!ticket','Ticket kanalı belirlendiyse kullanabilirsiniz.')
.addField('ᴪ r!ilginçbilgi', 'İlginç bilgileri görebilirsiniz.')
.addField('ᴪ r!kullanıcıbilgim','Kullanıcı bilgilerini gösterir.')
.addField('ᴪ r!corona-bilgi','Korona hakkında bilgi verir.')
.addField('ᴪ r!havadurumu','Havadurumu hakkında bilgi verir.')
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
  name: 'diğer',
  description: 'Bağımsız menüyü açar.',
  usage: 'diğer'
};
