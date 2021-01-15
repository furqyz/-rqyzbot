const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(':x: bu özelliği kullanabilmek için `Yönetici` yetkisine sahip olmalısınız')

  const sa = new Discord.MessageEmbed()
  .setAuthor("• Artık yazı yazabilirsin. ")
  .setDescription(`Sohbet yazılabilir hale geldi.`)
  .setFooter('Şu andan itibaren bu kanala yazı yazabilirsin.') 
  message.channel.send(sa)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 0
};

exports.help = {
  name: "sohbet-aç",
  description: "Sohbetinizi açmaya yarar.",
  usage: "sohbet-aç"
};