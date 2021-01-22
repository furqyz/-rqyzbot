const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : r!öneri - r!hata - r!istek')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
.setDescription('<a:mode:798636415487311922> Hata/öneri/istek yazınız başarıyla bildirildi. \nEn Yakın Zamanda Destek Sunucumuzdan Cevap Vereceğiz.')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **isteği ;**`)
.addField(`**Gönderen Kişinin Bilgileri**`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`)
.addField("**Gönderilen İstek/Öneri/Hata Mesajı**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('802267277545570334').send(embed2); //Mesajın Gideceği Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['hata', 'öneri', 'istek'],
  permLevel: 0
}

exports.help = {
    name: 'hata',
    description: 'hata',
    usage: 'hata <hata>'
}