const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
    "_ 25. KARA BÜYÜ 7,5 _ ",
    "_ 24. TEKSAS KATLİAMI 7,5 _ ",
    "_ 23. ŞEYTANIN ÖLÜSÜ 7,5 _ ",
    "_ 22. KORKU SEANSI 7,5 _ ",
    "_ 21. ZOMBİ EKSPRESİ 7,5 _ ",
    "_ 20. SESSİZ BİR YER 7,5_ ",
    "_ 19. ÖLÜM OYUNU 7,6 _ ",
    "_ 18. ÖLÜMCÜL OYUNLAR 7,6 _ ",
    "_ 17. DİĞERLERİ 7,6 _ ",
    "_ 16. TESTERE 7,6 _ ",
    "_ 15. 28 GÜN SONRA 7,6 _ ",
    "_ 14. KUŞLAR 7,7 _ ",
    "_ 13. KAPAN 7,7 _ ",
    "_ 12. YABANCI 7,8 _ ",
    "_ 11. ÖLÜM KİTABI 7,8 _ ",
    "_ 10. AV 7,9 _ ",
    "_ 9. DAWN OF THE DEAD 7,9 _ ",
    "_ 8. ROSEMARY'NİN BEBEĞİ 8 _ ",
    "_ 7. THE EXORCIST 8 _ ",
    "_ 6. JAWS 8 _ ",
    "_ 5. ALTINCI HİS 8,1 _ ",
    "_ 4. ÖLÜM KORKUSU 8,3 _ ",
    "_ 3. ARKA PENCERE 8,4 _ ",
    "_ 2. CİNNET 8,4 _ ",
    "_ 1. SAPIK 8,5 _ ",


     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("**Top 25 listemizden sana önerdiğim korku filmi:**")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["filmkorku", "fkorku"],
  permLevel: 0
};

exports.help = {
  name: "filmkorku"
};