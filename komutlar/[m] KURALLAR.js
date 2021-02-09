const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${client.user.username}`)
 .setDescription(`

 📍・          **Metin Kanalları Kuralları**
๑▬▬▬▬▬〘:clipboard:〙▬▬▬▬▬๑ ๑▬▬▬▬▬〘:clipboard:〙▬▬▬▬▬๑

📌・**Reklam**
• Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.

📌・**Küfür, Argo, Hakaret**
• Her kanalda küfür etmek ve argo kullanmak yasaktır.
• Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

📌・**Yetkililer ve Yetki**
• Yetki istemek yasaktır.
• Yetkili alımları ile ilgili soru sormak yasaktır.
• Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
• Yetkililere saygılı olun.

📌・**Spam, Flood, Etiketleme**
• Spam yapmak yasaktır.
• Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
• Flood yapmak alt alta yazmak yasaktır.
• Bir üyeyi sürekli @etiketlemek yasaktır.

📌・**Din, Siyaset, Cinsellik**
• Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
• Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
• 18+ fotoğraflar paylaşmak ve konuşmak yasaktır.

📍・               **Ses Kanalları Kuralları**
๑▬▬▬▬▬〘:loudspeaker:〙▬▬▬▬▬๑ ๑▬▬▬▬▬〘:loudspeaker:〙▬▬▬▬▬๑

• Ses kanallarında kişiyi rahatsız etmek ve rahatsız edici şekilde konuşmak yasaktır.
• Public  odalarda bass açmak ve insanları rahatsız etmek yasaktır.
• Private ve public odalar da AFK bırakmak yasaktır.
• Ailevi,siyasi,dini kişiyi üzecek küfürler yasaktır. 
• Ses programı açmak yaskatır.
`)

  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'kuralları atar',
  usage: 'kurallar'
}; 

