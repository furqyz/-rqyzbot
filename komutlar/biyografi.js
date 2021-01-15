const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const fynixyapımcı = new Discord.MessageEmbed()
  
  .setTitle('Hakkımda ;')
  
  .setColor("RED")
  
  .setThumbnail('https://i.pinimg.com/originals/02/36/6f/02366f27a459120b96d033318b743272.gif')
  
  .setDescription('Adım Furkan bu işe daha yeni başladım ve diğer botlara nazaran en gerekli şeyleri eklemeyi gerek duydum. Uğraşarak çabalayarak bir şeyler yapmaya çalışıyorum. Sizin önerileriniz benim için çok önemlidir. Hata veya önerilerinizi lütfen bana iletin. (Bot beta aşamasındadır.)')
  
  message.channel.send(fynixyapımcı)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['biyografi'],
  permLevel: 0
}

exports.help = {
  name: "biyografi",
  description: "Benim hakkımda her şeyi öğrenebilirsin.",
  usage: "biyografi"
}