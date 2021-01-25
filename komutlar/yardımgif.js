const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Gif Menüsü')
.setTimestamp()
.addField('ᴪ r!öp', 'Dilediğiniz kişiyi öpebilirsiniz.')
.addField('ᴪ r!polisiara', 'Polis ekibini ararsınız.')
.addField('ᴪ r!öldür', 'Dilediğiniz kişiyi öldürebilirsiniz.')
.addField('ᴪ r!tokat-at', 'Dilediğiniz kişiye tokat atarsınız.')
.addField('ᴪ r!fbi', 'FBI OPEN THE DOOR.')
.addField('ᴪ r!sigara', 'Bir sigara yakar mısın?')
.addField('ᴪ r!bayrak', 'Türk bayrağı atar.')
.addField('ᴪ r!atatürk', 'Atamızın gifini atar.')
.addField('ᴪ r!memati', 'Seni hiç alakadar etmez.')
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
  name: 'gif',
  description: 'Gif komutlarını gösterir.',
  usage: 'gif'
};
