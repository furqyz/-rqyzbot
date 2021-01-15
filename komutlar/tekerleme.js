const discord = require("discord.js")

exports.run = function(client, message, args){

var box = [
"Götür küpü, dök küpü. Getir küpü dök küpü",
"GüI dibi, büIbüI diIi gibi",
"Çarşıda koza ucuz, çarşıda darı ucuz, çarşıda boza da ucuz mu?",
"FaIcı, faIcının faIına, fasa fiso dedi.",
"O pikap, şu pikap, bu pikap.",
"Sudan çıktı iki su şadısı, biri erkek şu şadısı, diğeri dişi şu şadısı.",
"Keşkekçinin keşkekIenmiş keşkek kepçesi.",
"Bu evi yıkıp yapsak da mı otursak, yoksa yıkmasak onarsak da mı otursak?",
"Dört deryanın deresini dört dergâhın derbendine devrederIerse, dört deryadan dört dert, dört dergâhtan dört dev çıkar.",
"Sen seni biI, sen seni, biI sen seni, biI sen seni, sen seni biImezsen patIatırIar enseni.",
"Al bu takatukaları takatukacıya takatukalattırmaya götür, eğer takatukaları takatukacı takatukalatmazsa takatukaları taktukacıya takatukalattırmadan getir.",
"Bu çorbayı nanelemelî mi de yemeli, nanelememeli mi de yemeli?",
"Üstü üç taşlı taç saplı üç tunç tası çaldıran mı çabuk çıldırır, yoksa iç içe yüz ton saç kaplı çanı kaldıran mı çabuk çıldırır?",
"Sen ne zamandan beri tekere mekere şekere mekere bir porsuksan bende o zamana kadar şekere mekere tekere mekere bir porsuğum.",
"İndim dereye sarul seke teke çepiç tek otlarlar. Dedim niçin sarul seke teke çepiç tek otlarsınız? Dedi bizim sorumuz sopumuz torumuz topumuz sarul seke teke çepiç tek otlarlar.",
"Yalan, bu yalan, fili yuttu bi yılan, bu da oldu kuyruklu bi yalan. Karıncaya vurdum palan, otuz iki yerinden çektim kolan... Pireye bindim de deveyi kucağıma aldım, bu da mı yalan.",
"Kırk kanatlılardan Kırklarelili kırkayak kıkırdayarak kırık kırak yerken kırık kanadına kırıntılar döküldü.",
"Bu çorbayı nanelemelî mi de yemeli, nanelememeli mi de yemeli?"
]
const CrewCode = box[Math.floor(Math.random() * box.length)];
 
message.channel.send(
new discord.MessageEmbed()
.setTitle("Tekerleme")
.setDescription(CrewCode)
  )
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'tekerleme',
  category: 'eğlence',
  description: 'Rastgele bir tekerleme atar',
  usage: 'tekerleme' 
}