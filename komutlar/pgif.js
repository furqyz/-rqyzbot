const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = (client, msg, args) => {

  if (msg.channel.nsfw === true) {
 const embed = new Discord.MessageEmbed()
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pgif'})
    .end((err, response) => {
      const pixelien = new Discord.MessageEmbed()
      .setAuthor(`KALİTENİN 1 NUMARALI ADRESİ XD`)
      .setTitle("Linki için buraya tıkla")
      .setImage(response.body.message)
      .setColor("RANDOM")
      .setURL(response.body.message)
      .setFooter('©2020 !rqyz', client.user.avatarURL())
      msg.channel.send(pixelien);
    });
  } else {
    msg.channel.send("Bu kanalda **NSFW** kapalı buraya maalesef atamam..")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['porno','4k'],
  permLevel: 0
};

exports.help = {
  name: 'pgif',
  description: 'NSFW Resimleri Gösterir',
  usage: 'pgif'
};