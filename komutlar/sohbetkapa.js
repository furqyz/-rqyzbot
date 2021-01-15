const Discord = require("discord.js");
const db = require("wio.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "d!";
  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    const codwaembed = new Discord.MessageEmbed()
      .setDescription("**Ne yazık ki bu komutu kullanmaya yetkin yok.**")
      .setColor("BLACK");

    message.channel.send(codwaembed);
    return;
  }
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

   const sa = new Discord.MessageEmbed()
    .setAuthor("• Daha sonra tekrar dene.")
    .setDescription(`Sohbet yazılamaz hale geldi.`)
    .setFooter('Şu andan itibaren bu kanala yazı yazamasın.') 
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
  name: "sohbet-kapat",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "sohbet-kapat"
};