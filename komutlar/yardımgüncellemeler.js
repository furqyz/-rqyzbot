const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setDescription(`
 **SON BAKIM ÇALIŞMASI**
 **📌・EVERYONE HERE ENGEL:** r!everyengel Everyone & Here yasaklarsınız.
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

