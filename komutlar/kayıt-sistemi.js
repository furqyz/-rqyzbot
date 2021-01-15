const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const codework = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setAuthor(`Sunucunuza Kayıt Sistemi Kurarsınız.`)
    .addField(`Kullanıcı Kayıt Sistemi Kullanımı`,
                
`**-»** **\`r!kayıt-kanal-ayarla #kanal\`**\nÜyelerin Kayıt Olacağı Kanal

**-»** **\`r!kayıt-log-ayarla #kanal\`**\nÜyeler Kayıt Olunca Bildirim Yollanan Kanal

**-»** **\`r!kayıt-verilecek-rol-ayarla @rol\`**\nKayıt Olan Kullanıcıya Verilecek Rol

**-»** **\`r!kayıt-alınacak-rol-ayarla @rol\`**\nKayıt Olan Kullanıcıdan Alınacak Rol

**-»** **\`r!kayıt-sistemini-kapat\`**\nKayıt Sistemini Kapatır ve Tüm Ayarları Sıfırlar`)
    .setFooter(message.author.username)
    .setTimestamp()
    message.channel.send(codework).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};


exports.help = {
    name: 'kayıt-sistemi',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösterir.',
};
