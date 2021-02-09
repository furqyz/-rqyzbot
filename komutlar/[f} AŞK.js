const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
    "_ 25. Veer-Zaara (2004) 7.8 _ ",
    "_ 24. Kelebeğin Rüyası (2013) 7.8 _ ",
    "_ 23. The Hunger Games: Catching Fire (2013) 7.5 _ ",
    "_ 22. Aşk ve Gurur (Pride and Prejudice) (2005) 7.8 _ ",
    "_ 21. Bay Hiçkimse (2009) 7.8 _ ",
    "_ 20. Titanic (1997) 7,8_ ",
    "_ 19. La Belle Et La Béte (1946) 7,8 _ ",
    "_ 18. Beni Adınla Çağır (2017) 7,9 _ ",
    "_ 17. Yükselen Ay Krallığı (2012) 7.9 _ ",
    "_ 16. Sen Aydınlatırsın Geceyi (2013) 7,8 _ ",
    "_ 15. Aşk ve Gurur (2005) 7.8 _ ",
    "_ 14. Umut Işığım (2012) 7.8 _ ",
    "_ 13. Zamanda Aşk (2013) 7.8 _ ",
    "_ 12. Aynı Yıldızın Altında (2014) 7.9 _ ",
    "_ 11. Not Defteri (2004) 7.9 _ ",
    "_ 10. Bir Zamanlar (2007) 7.9 _ ",
    "_ 9. Günden Kalanlar (1993) 7.9 _ ",
    "_ 8. Geceyarısından Önce (2013) 7.9 _ ",
    "_ 7. Makas Eller (1990) 8.0 _ ",
    "_ 6. Aşk (2013) 8.0 _ ",
    "_ 5. Saksı Olmanın Faydaları (2012) 8.0 _ ",
    "_ 4. Güzel ve Çirkin (1991) 8.0 _ ",
    "_ 3. Gün Doğmadan (1995) 8.0 _ ",
    "_ 2. Prenses Gelin (1987) 8.1 _ ",
    "_ 1. Sil Baştan (2004) 8.4 _ ",


     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("**Top 25 listemizden sana önerdiğim aşk filmi:**")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["filmaşk", "faşk"],
  permLevel: 0
};

exports.help = {
  name: "filmaşk"
};