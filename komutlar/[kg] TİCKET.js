const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : **r!kgticket sorununuz**')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
.setDescription('<a:mode:798636415487311922> **Ticket** yazınız başarıyla bildirildi. \nEn Yakın Zamanda Cevap Vereceğiz. **KIRAATHANE GAMING**')
message.channel.send(embed)
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **Ticketi ;**`)
.addField(`**Gönderen Kişinin Bilgileri**`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Etiketi: ${message.author.discriminator}`)
.addField("**Gönderilen TİCKET**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('808692617092792360').send(embed2); //Mesajın Gideceği Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  permLevel: 0
}

exports.help = {
    name: 'kgticket',
    description: 'kgticket',
    usage: 'kgticket'
}