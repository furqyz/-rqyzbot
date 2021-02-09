const Discord = require("discord.js");

exports.run = async (client, message, args) => {
///////////////////////////
  var sözler = [
    "_ 25. Limitless (2011) 7.4 _ ",
    "_ 24. Looper (2012) 7.4 _ ",
    "_ 23. The Hunger Games: Catching Fire (2013) 7.5 _ ",
    "_ 22. Source Code (2011) 7.5 _ ",
    "_ 21. Ex Machina (2015) 7.7 _ ",
    "_ 20. The Butterfly Effect (2004) 7,7_ ",
    "_ 19. Gravity (2013) 7,7 _ ",
    "_ 18. Avatar (2009) 7,8 _ ",
    "_ 17. Children of Man (2006) 7.9 _ ",
    "_ 16. Edge Tomarrow (2014) 7,9 _ ",
    "_ 15. District 9 (2009) 7,9 _ ",
    "_ 14. The Terminator (1984) 8.0 _ ",
    "_ 13. X-Men: Days of Future Past (2014) 8.0 _ ",
    "_ 12. Mad Max: Fury Road (2015) 8.1 _ ",
    "_ 11. Harry Potter and the Deathly Hallows I - II (2011) 8.1 _ ",
    "_ 10. Truman Şov (1998) 8,1 _ ",
    "_ 9. Jurassic Park (1993) 8.1 _ ",
    "_ 8. A Space Odeyssey (1968) 8,3 _ ",
    "_ 7. Wall·E (2008) 8,4 _ ",
    "_ 6. Back to Future (1995) 8.5 _ ",
    "_ 5. The Prestige (2006) 8,5 _ ",
    "_ 4. Star Wars: Episode VII - The Force Awakens (2015) 8.6 _ ",
    "_ 3. Interstellar (2014) 8,6 _ ",
    "_ 2. Matrix (1999) 8.7 _ ",
    "_ 1. Inception (2010) 8,8 _ ",


     ] 
     var veritabanı = sözler[Math.floor(Math.random() * (sözler.length))]

///////////////////////////
const vrs = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("**Top 25 listemizden sana önerdiğim bilimkurgu filmi:**")
.setDescription(`${veritabanı}`)
message.channel.send(vrs);
///////////////////////////
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["filmbilimkurgu", "fbilimkurgu"],
  permLevel: 0
};

exports.help = {
  name: "filmbilimkurgu"
};