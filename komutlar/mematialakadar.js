const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const motion = new Discord.MessageEmbed()

.setColor("RED")
.setImage("https://media1.tenor.com/images/7e238954726023d92e97f27fd9643adf/tenor.gif?itemid=13376460")
.setTitle(" SENİ HİÇ ALAKADAR ETMEZ");

  message.channel.send(motion);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mematialakadar"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "memati",
  description: "Seni Hiç Alakadar Etmez.",
  usage: "memati"
};