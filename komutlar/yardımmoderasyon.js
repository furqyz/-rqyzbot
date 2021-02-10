const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Moderasyon Menüsü')
.setTimestamp()
.addField('ᴪ r!ban', 'Etiketlediğiniz kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!forceban', 'İD olarak kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!banlist', 'Sunucudaki yasaklı kullanıcıları gösterir.')
.addField('ᴪ r!kick', 'Etiketlediğiniz kullanıcıyı sunucudan atar.')
.addField('ᴪ r!temizle','İstediğiniz kadar mesaj silebilir.')
.addField('ᴪ r!sil-üye','Etiketlediğiniz kullanıcının mesajını silebilir.')
.addField('ᴪ r!sa-as','Selamun aleyküm - Aleyküm selam, açar.')
.addField('ᴪ r!yetkilerim','Yetkilerinize kolaylıkla bakabilirsiniz.')
.addField('ᴪ r!say','Sunucu istatistiğini gösterir.')
.addField('ᴪ r!yavaş-mod','Yavaş modu açar (0/10).')
.addField('ᴪ r!kurallar', 'Hazır sunucu kurallarını atar.')
.addField('ᴪ r!rolver','Etiketlediğiniz kullanıcıya istediğiniz rolu verir. ')
.addField('ᴪ r!roller','Sunucuda bulunan rolleri görüntülersin.')
.addField('ᴪ r!sohbet-aç','Belirtilen kanala yazı yazılmasını sağlar.')
.addField('ᴪ r!sohbet-kapat','Belirtilen kanala yazı yazılmasını yasaklar.')
.addField('ᴪ r!nuke', 'Bulunduğunuz kanalı silip tekrar oluşturur.')
.setFooter('© 2020 @!rqyz', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["mod"], 
  permLevel: 0 
};


exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'moderasyon'
};
