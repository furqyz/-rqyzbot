const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const motion = new Discord.MessageEmbed()

.setColor("RED")
.setImage("https://i.hizliresim.com/m2P4R2.gif")
.setTitle("Ahh be oğlum");

  message.channel.send(motion);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sigara"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "sigara",
  description: "Sigara gifi atar",
  usage: "sigara"
};