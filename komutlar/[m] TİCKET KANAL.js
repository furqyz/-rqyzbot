const Discord = require('discord.js');
const db = require('wio.db')

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**<a:mode:798636415487311922> Üzgünüm bu komudu kullanmak için `YÖNETİCİ` yetkisine sahip olman gerek.**");
let reason = args.slice(1).join(' ')
 
var kanal = message.mentions.channels.first() 


if (args[0] == "sıfırla") {
  db.delete(`önerikanal_${message.guild.id}`)
  return message.channel.send("<a:mode:798636415487311922> **Ticketlerin gönderileceği kanal sıfırlandı.**")
} else if (!kanal) {
  return message.channel.send("<a:mode:798636415487311922> **Lütfen bir kanal etiketleyiniz.**")
} else {
  db.set(`önerikanal_${message.guild.id}`, kanal.id)
  return message.channel.send(`<a:mode:798636415487311922> **Ticketlerin gönderileceği başarıyla ${kanal} olarak ayarlandı.** \nSıfırlamak için **ticket-ayarla sıfırla** `)
}

 } 
 
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["ticket-kanal"],
 permLevel: 0
}
exports.help = {
 name: 'ticket-ayarla',
 description: 'ö',
 usage: 'ö'
};
