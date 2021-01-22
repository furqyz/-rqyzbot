const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Hakkında Menüsü')
.setTimestamp()
.addField('ᴪ r!istatistik','Botun istatistiğini gösterir.')
.addField('ᴪ r!biyografi', 'Neden ben?')
.addField('ᴪ r!davet','Davet linklerini gösterebilirim.')
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
  name: 'hakkında',
  description: 'Benim hakkımda her şeyi öğrenebilirsin.',
  usage: 'hakkında'
};
