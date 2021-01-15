const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Lütfen yazı yazın`);
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`.replace(
    " ",
    "+"
  );

  const motion = new Discord.MessageEmbed()
    .setTitle("METİN")
    .setColor("RANDOM")
    .setImage(linqo)
    .setFooter("Metin Oluşturuldu");
  message.channel.send(motion);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yazıfoto", "yazı-foto"],
  permLevel: 0
};

exports.help = {
  name: "metin",
  description: "Yazdığınızı metine döker çevirir.",
  usage: "metin <yazı>"
};