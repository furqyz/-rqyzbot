const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Eğlence Menüsü ')
.setTimestamp()
.addField('ᴪ r!efkarım', 'Efkarınızı ölçebilirsiniz.')
.addField('ᴪ r!fal', 'Falınıza bakabilirsiniz.')
.addField('ᴪ r!söz', 'Sözlere bakabilirsiniz.')
.addField('ᴪ r!espri', 'Bot espri yapar.')
.addField('ᴪ r!tekerleme', 'Tekerlemeler okursunuz.')
.addField('ᴪ r!elyazı','Yazı stilinizi elyazı yapar.')
.addField('ᴪ r!kapaklaflar','Kapak laflar söyler.')
.addField('ᴪ r!avatar','Etiketlediğiniz kişinin avatarını görüntülersiniz.')
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
  name: 'eğlence',
  description: 'Eğlence menüsünü açar.',
  usage: 'eğlence'
};
