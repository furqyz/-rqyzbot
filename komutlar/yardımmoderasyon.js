const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» !rqyz Moderasyon Menüsü')
.setTimestamp()
.addField('ᴪ r!ban', 'Etiketlediğiniz kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!forceban', 'İD olarak kullanıcıyı sunucudan banlar.')
.addField('ᴪ r!id', 'Kullanıcının İD kısmını atar. (Veya sağ tık - İD kopyala)')
.addField('ᴪ r!küfür-engel', 'Küfür engel sistemini açarsınız.')
.addField('ᴪ r!reklam-engel', 'Reklam engel sistemini açarsınız.')
.addField('ᴪ r!kick', 'Etiketlediğiniz kullanıcıyı sunucudan atar.')
.addField('ᴪ r!temizle','İstediğiniz kadar mesaj silebilir.')
.addField('ᴪ r!sil-üye','Etiketlediğiniz kullanıcının mesajını silebilir.')
.addField('ᴪ r!sa-as','Selamun aleyküm - Aleyküm selam, açar.')
.addField('ᴪ r!yetkilerim','Yetkilerinize kolaylıkla bakabilirsiniz.')
.addField('ᴪ r!say','Sunucu istatistiğini gösterir.')
.addField('ᴪ r!yavaş-mod','Yavaş modu açar (0/10).')
.addField('ᴪ r!rolver','Etiketlediğiniz kullanıcıya istediğiniz rolu verir. ')
.addField('ᴪ r!roller','Sunucuda bulunan rolleri görüntülersin.')
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'moderasyon'
};
