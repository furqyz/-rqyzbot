const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("efqCODE | Sözler yükleniyor.").then(message => {

    var FwhyCode = [
 
      "Gerek yok her sözü laf ile beyana. Bir bakış bin söz eder, bakıştan anlayana.",
      "Ben seni susayacak kadar, ben sana susayacak kadar, ben seni beni susturacak kadar sevdim.",
      "Yanında olduğum zaman değerimi bilmezsen, değerimi bildiğin gün beni yanında bulamazsın.",
      "Gidenin arkasına bakmayın yoksa geleni göremezsiniz.",
      "Benimle ömür geçer mi ki dedim. /senle geçirmeye ömür yeter mi?/ dedi. İşte buna bir ömür yetti.",
      "İnsan hep bilmediğinden değil. Bazen bilmediğinden susar. Edep bilir susar, sabır bilir susar ve Saygı bilir susar.",
      "İnsanı farklı yapan, affettikleri, güçlü yapan sabrettikleri, kendisi yapan ise vazgeçtikleridir.",
      "Gözlerim kapalı, bir sonbahar akşamında. Sıcak göğsünün kokusunu içime çeker dalarım, gözlerimden mesut kıyılar geçer. Hep aynı günün ateşi vurur sularına...",
      "Uzağımda ama her gece kalbimde uyuyor.",
      "Hatırlama, Gönül Dağı’ndaki “Gül” kadar güzel ise “Unutulmak” Hüzün Dağı’ndaki diken kadar acıdır.",
      "Umudunu yitirme şu hayatta bir şeyin bitişi, her zaman başka bir şeyin başlamasına sebep olmuştur.",
      "Yılanlardan korkma, yılmayanlardan kork.",
      "Hayat gerçekten çok basit ama biz hayatı karmaşık hale getirmek için ısrar ediyoruz.",
      "Mutlu olmayı yarına bırakmak, karşıya geçmek için nehrin durmasını beklemeye benzer ve bilirsin o nehir asla durmaz.",
      "Bazıları büyük doğar, bazıları büyüklüğü kazanır, bazılarına da büyüklük kendi gelir.",
      "Aşk çok kısa ama unutması çok zor.",
      "Önce üzüntüyü kabul etmelisin. Kaybetmeden kazanmanın ne olduğunu o zaman anlayacaksın.",
      "Sebeplerimi hatırlamadan sonuçlarını hatırlamak epey zor.",      
      "İnsan, aslında ne olduğunu reddeden tek varlıktır.",
      "Yalnız kalma özgürlüğü sarhoş edicidir."
    ];

    var FwhyCode = FwhyCode[Math.floor(Math.random() * FwhyCode.length)];

    message.edit(`${FwhyCode}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sözz", "güzelsöz", "sözler", "söz"],
  permLevel: 0
};

exports.help = {
  name: "söz",
  description: "Güzel sözler söyleyebilir..",
  usage: "söz"
};