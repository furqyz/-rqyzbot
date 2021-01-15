const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  var sansl = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonucl = sansl[Math.floor((Math.random() * sansl.length))];
  var sansz = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonucz = sansz[Math.floor((Math.random() * sansz.length))];
  var sanse = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonuce = sanse[Math.floor((Math.random() * sanse.length))];
  var sansr = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonucr = sansr[Math.floor((Math.random() * sansr.length))];
  var sansc = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonucc = sansc[Math.floor((Math.random() * sansc.length))];
  var sansf = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonucf = sansf[Math.floor((Math.random() * sansf.length))];
  var sanss = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonucs = sanss[Math.floor((Math.random() * sanss.length))];
  var sans = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonuc = sans[Math.floor((Math.random() * sans.length))];
  var sansm = ["💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆","🎮","🎲","💪","💫","🐉","🏆",":🎮","🎲"];
  var sonucm = sansm[Math.floor((Math.random() * sansm.length))];
  message.channel.send(`**| :slot_machine:  SLOT  |**\n **------------------**\n**${sonuc} : ${sonucl} : ${sonucz}**\n**${sonuce} : ${sonucr} : ${sonucc}  <**\n**${sonucf} : ${sonucm} : ${sonucs}**\n **------------------**`)
  .then(nmsg => nmsg.edit(`**|  :slot_machine:  SLOT  |**\n **------------------**\n**${sonucz} : ${sonucl} : ${sonuc}**\n**${sonuce} : ${sonucc} : ${sonucf}  <**\n**${sonucr} : ${sonucm} : ${sonucs}**\n **------------------**`))
  .then(nmsg => nmsg.edit(`**|  :slot_machine:  SLOT  |**\n **------------------**\n**${sonucs} : ${sonuc} : ${sonucc}**\n**${sonucf} : ${sonuce} : ${sonucm}  <**\n**${sonucr} : ${sonucz} : ${sonucl}**\n **------------------**`))
  .then(nmsg => nmsg.edit(`**| :slot_machine:  SLOT |**\n **------------------**\n**${sonucz} : ${sonucl} : ${sonucs}**\n**${sonucl} : ${sonuce} : ${sonucc}  <**\n**${sonucf} : ${sonuc} : ${sonucs}**\n **------------------**\n**|     Oyun bitti    |**`))



};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['slot'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slots',
    description: 'Tüm komutları gösterir.',
    usage: 'slots'
  };