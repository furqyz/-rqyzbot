const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send('Doğru Kullanım : \`şikayet >sorununuz<\`')
const embed = new Discord.MessageEmbed()
.setColor('#00ff00')
message.delete()
message.reply('\n <a:mode:798636415487311922> **Şikayet** yazınız başarıyla bildirildi. \nEn Yakın Zamanda Cevap Vereceğiz. \`**KIRAATHANE GAMING**\`')
const embed2 = new Discord.MessageEmbed()
.setColor("#ff0009")
.setDescription(`**${message.author.tag}** adlı kullanıcının **Şikayeti ;**`)
.addField(`**Gönderen Kişinin Bilgileri**`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Etiketi: ${message.author.discriminator}`)
.addField("**Gönderilen TİCKET**", type)
.setThumbnail(message.author.avatarURL)
client.channels.cache.get('809039106381578280').send(embed2); //Mesajın Gideceği Kanal ID 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kgticket", "şikayet"],
  permLevel: 0
}

exports.help = {
    name: 'kgticket',
    description: 'kgticket',
    usage: 'kgticket'
}
