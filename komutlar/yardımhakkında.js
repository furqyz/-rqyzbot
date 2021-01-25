const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Bot Menüsü')
.setTimestamp()
.addField('ᴪ r!hata', 'Bot hakkında hata bildirirsiniz.')
.addField('ᴪ r!öneri', 'Bot hakkında öneri bildirirsiniz.')
.addField('ᴪ r!istek', 'Bot hakkında istek bildirirsiniz.')
.addField('ᴪ r!istatistik','Botun istatistiğini gösterir.')
.addField('ᴪ r!davet','Davet linklerini gösterebilirim.')
.setFooter('© 2020 @!rqyz', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bot'], 
  permLevel: 0 
};

exports.help = {
  name: 'hakkında',
  description: 'Benim hakkımda her şeyi öğrenebilirsin.',
  usage: 'hakkında'
};
