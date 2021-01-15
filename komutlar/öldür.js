const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Kimi öldüreceksin?");

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`BLUE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı öldürdü.**`
    )

    .setImage(
      `https://i.gifer.com/3x6I.gif`
    );
  return message.channel.send(EmbedFwhyCode);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "gif",
  permLevel: 0
};

exports.help = {
  name: "öldür",
  description: "İstediğiniz kişiyi öldürür.",
  usage: "öldür"
};
