const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Film Menüsü')
.setTimestamp()
.addField('ᴪ r!fbilimkurgu', 'Bilimkurgu konulu film önerisi alırsınız.')
.addField('ᴪ r!fkorku', 'Korku konulu film önerisi alırsınız.')
.addField('ᴪ r!faşk', 'Aşk konulu film önerisi alırsınız.')
.addField('ᴪ r!botöneri', 'Bot size öneri yapar.')
.addField('ᴪ r!top100', 'En iyi 100 filmlerden rastgele öneri alırsınız.')
.setFooter('@2020 @!rqyz', client.user.avatarURL())
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
  name: 'film-öner',
  description: 'Bağımsız menüyü açar.',
  usage: 'film-öner'
};
