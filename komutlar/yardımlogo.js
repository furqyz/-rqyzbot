const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Logo Menüsü')
.setTimestamp()
.addField('ᴪ r!discord <yazı>', 'Discord logo stili.')
.addField('ᴪ r!rainbow <yazı>', 'Rainbow logo stili.')
.addField('ᴪ r!bubble <yazı>', 'Kabarcık logo stili.')
.addField('ᴪ r!Mavi <yazı>', 'Mavi logo stili.')
.addField('ᴪ r!habbo <yazı>', 'Habbo logo stili.')
.addField('ᴪ r!neon <yazı>', 'Neon logo stili.')
.addField('ᴪ r!kalp <yazı>', 'Kalp logo stili.')
.addField('ᴪ r!cool <yazı>', 'Cool logo stili.')
.addField('ᴪ r!metin <yazı>', 'Komik logo stili.')
.addField('ᴪ r!gold <yazı>', 'Gold logo stili.')
.addField('ᴪ r!grafiti <yazı>', 'Grafiti logo stili.')
.addField('ᴪ r!kırmızı <yazı>', 'Kırmızı logo stili.')
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
  name: 'logo',
  description: 'Logo komutları gösterir.',
  usage: 'logo'
};
