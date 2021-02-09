const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setDescription(`
 **10.02.2021**
 **📌・Steam Sistemi:** r!steam yazarak oyunların fiyatlarına bakabilirsiniz.
 **📌・Play Store Sistemi:** r!playstore yazarak oyunların fiyatlarına bakabilirsiniz.
 **📌・Türk Dil Kurumu Sistemi:** r!tdk yazarak kelimelerin anlamlarına bakabilirsiniz.
 **📌・CS:GO KASA:** r!csgokasa yazarak kasa açabilirsiniz.
 **📌・KAÇ CM:** r!kaçcm yazarak neyse anladınız siz :D
 **📌・KATEGORİLİ FİLM ÖNERİSİ:** r!film-öner yazarak bir sürü öneri alabilirsiniz.
 **📌・TİCKET SİSTEMİ:** r!ticket-kanal yazarak kanalı oluşturabilirsiniz.
 **📌・TİCKET SİSTEMİ:** r!ticket yazarak ayarlanan kanala ticket gönderebilirsiniz.
 **📌・HAZIR KURALLAR:** r!kurallar yazarak hazır kuralları görebilirsiniz.
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

