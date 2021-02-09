const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
    "_ Pasifik Savaşı _ ",
    "_ Pasifik Savaşı 2 _ ",
    "_ Passengers _ ",
    "_ Yarından Sonra _ ",
    "_ Yarının Sınırında _ ",
    "_ Rampage Büyük Yıkım _ ",
    "_ Dünyalar Savaşı _ ",
    "_ Kıyamet Günü _ ",
    "_ Kıyamet Günü 2 _ ",
    "_ I Robot _ ",
    "_ I'm Legend _ ",
    "_ JPWorld _ ",
    "_ Oblivion _ ",
    "_ 5th Wave _ ",
    "_ Ender's Game _ ",
    "_ Godzilla _ ",
    "_ Godzilla II: Canavarlar Kralı _ ",
    "_ The Road _ ",
    "_ Battleship _ ",




     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("**Sana önerdiğim film:**")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botöneri"
};