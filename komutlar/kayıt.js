const Discord = require('discord.js');
const db = require('wio.db');

exports.run = async (client, message, args) => {

  const codework = await db.fetch(`kayıtk_${message.guild.id}`)
  
  if(codework == null) return message.channel.send('');
  if (message.channel.id !== codework) return message.channel.send(`Sadece Kayıt Kanalından Kayıt Olabilirsiniz.`);
  if (codework == true) return; 
  if (codework == false) return message.channel.send(`Bu Sunucuda Kayıt Sistemi Aktif Edilmemiş.`);
 
  let user = message.member
  let guild = message.guild
  let isim = args[0];
  let yas = args[1];
  if (!isim) return message.channel.send(`İsmini girmelisin.`)

  user.setNickname(`[${isim}]`)
  setTimeout(function(){user.roles.add(db.fetch(`kayıt_${message.guild.id}`))},3000)
  setTimeout(function(){user.roles.remove(db.fetch(`kayıtalınacak_${message.guild.id}`))},4000)
  message.channel.send(`${message.author} Sunucuya Başarıyla Kayıt oldun !`)
  message.guild.channels.cache.get(db.fetch(`kayıtlog_${message.guild.id}`)).send(`${message.author} Adlı kullanıcı Başarılı Şekilde Kayıt Oldu !`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "yetkili"
}

exports.help = {
  name: 'kayıt',
  description: "Sunucuya kayıtolmaya yarar",
  usage: 'kayıt <isim> <yaş>'
}
