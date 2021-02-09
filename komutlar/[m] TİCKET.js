const Discord = require('discord.js');
const db = require('wio.db')
exports.run = async (client, message, args) => {
 
    var ökanal = await db.fetch(`önerikanal_${message.guild.id}`)
    var önerikanalı = message.guild.channels.cache.find(channel => channel.id === ökanal)
    if (!ökanal) return message.channel.send("**Maalesef Ticket Kanalı Ayarlanmamış.** `Ayarlamak İçin **ticket-kanal #kanal**` ")

var oneri = args.join(" ").slice(0)
if (!oneri) {
    message.channel.send("**Hey Dostum Yanlış Kullanıyorsun.** \n r!ticket ticketiniz`")
  
  return
} else {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.tag}** adlı kullanıcının **Ticketi ;**`)
.addField(`**Gönderen Kişinin Bilgileri**`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Etiketi: ${message.author.discriminator}`)
.addField("**Gönderilen TİCKET**", oneri)
  .setColor("RED")
     .setTimestamp()
.setThumbnail(client.user.displayAvatarURL()) 
.setFooter(`@2020 @!rqyz`)
    
önerikanalı.send(embed).then(m => {
    m.react("⬆️")
    m.react("⬇️")})
}

  message.channel.send(`<a:mode:798636415487311922> **Ticket başarıyla alındı!** \n Ticket ${önerikanalı} kanalına düştü`)

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["ticket"],
 permLevel: 0
}
exports.help = {
 name: 'ticket',
 description: 'ö',
 usage: 'ö'
};