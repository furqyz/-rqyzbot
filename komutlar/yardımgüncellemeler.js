const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setDescription(`
 **SON BAKIM ÇALIŞMASI**
 **📌・DÖVİZ:** r!döviz yazarak döviz kurunu görebilirsiniz.
 **📌・BİTCOİN:** r!bitcoin yazarak bitcoin son durumunu görebilirsiniz.
 **📌・DÜZELLO:** r!düello yazarak düello atabilirsiniz.
 **📌・ANİME ARA:** r!animeara yazarak anime aratabilirsiniz.
 **📌・ROL BİLGİ:** r!rolbilgi yazarak rol hakkına bilgi alabilirsiniz.
 **📌・TOPLAM KOMUT:** r!toplamkomut yazarak toplam komut sayısını görebilirsiniz.
 **📌・PREFİX:** r!prefix yazarak bota istediğiniz prefixi atabailirsiniz.
 **📌・AVATAR:** r!avatar yazarak avatarlara göz atabilirsiniz.
 **📌・+18 GÖRSELLER:** r!pgif yazarak +18 görsellere ulaşabilirsiniz.
`)

  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["güncellemeler", "güncel", "günceller"],
  permLevel: 0
};

exports.help = {
  name: 'güncelleme',
  description: 'güncelleri atar',
  usage: 'güncelleme'
}; 

