const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const motion = new Discord.MessageEmbed()

.setColor("RED")
.setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/giphy.gif?cid=ecf05e470297oa7ko30lvbafuu7lbymx009hkclwboz79i4m&rid=giphy.gif")
.setTitle("FBİ OPEN THE DOOR !");

  message.channel.send(motion);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fbi"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "fbi",
  description: "FBi gif atar",
  usage: "fbi"
};