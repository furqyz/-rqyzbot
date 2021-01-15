const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Eğlence Menüsü')
.setTimestamp()
.addField('ᴪ r!eğlence', 'Eğlence menüsünü açarsınız.')
.addField('ᴪ r!oyunlar', 'Oyun menüsünü açarsınız.')
.addField('ᴪ r!gif', 'Gif menüsünü açarsınız.')
.addField('ᴪ r!logo', 'Logo menüsünü açarsınız.')
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
  name: 'eğlenceli',
  description: 'Eğlence menüsünü açar.',
  usage: 'eğlenceli'
};
