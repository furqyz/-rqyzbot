const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')


var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};
require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;
  process.on('warning', function (err) {
    if ( 'MaxListenersExceededWarning' == err.name ) {
    process.exit(1); 

    }
  });

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
 
client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 1;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

////////YAZI YAZINCA CEVAP VERME/////////

//OTOTAG SİSTEMİ\\
client.on("guildMemberAdd", async member => {
    let judgedev = await db.fetch(`judgeteam?Ototag_${member.guild.id}`) 
    let judgekanal = await db.fetch(`judgeteam?OtotagKanal_${member.guild.id}`)
    if(!judgedev || !judgekanal) return
     
     member.setNickname(`${judgedev} ${member.user.username}`)
    client.channels.cache.get(judgekanal).send(`<a:mode:798636415487311922> **${member.user.username}** Adlı Kullanıcıya Otomatik Tag Verildi! :inbox_tray:`)
     
    });
 ///OTOROL
          client.on("guildMemberAdd", async member => {
  
 let kanal = db.fetch(`codwakanal_${member.guild.id}`)   
 let rol = db.fetch(`codwarol_${member.guild.id}`)
 let mesaj = db.fetch(`codwamesaj_${member.guild.id}`)
  
if(!kanal) return
member.roles.add(rol)
  client.channels.cache.get(kanal).send('<a:zil:798637076445659157> Otomatik Rol Verildi Seninle Beraber **`'+member.guild.memberCount+'`** Kişiyiz! Sunucumuza Hoşgeldin! **`'+member.user.username+'`**')

});
///SAYAÇ
client.on("guildMemberAdd", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  if (member.guild.memberCount >= sayac) {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `<a:konfeti:798637662265278474> **${
          member.user.tag
        }** sunucuya **katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` kişi olduk! TEBRİKLER sayaç sıfırlandı.`
);
   db.delete(`sayac_${member.guild.id}`);
    db.delete(`sayacK_${member.guild.id}`);
    return;
  } else {
    member.guild.channels.cache
      .get(skanal)
      .send(
        `<a:ggg:799375681267826748> **${
          member.user.tag
        }** sunucuya **katıldı**! \`${db.fetch(
          `sayac_${member.guild.id}`
        )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
          member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
          member.guild.memberCount
        }\` kişi!`
);
}
});

client.on("guildMemberRemove", async member => {
  let sayac = await db.fetch(`sayac_${member.guild.id}`);
  let skanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!sayac) return;
  member.guild.channels.cache
    .get(skanal)
    .send(
      `<a:ccc:799375668704968726>  **${
        member.user.tag
      }** sunucudan **ayrıldı**! \`${db.fetch(
        `sayac_${member.guild.id}`
      )}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) -
        member.guild.memberCount}\` üye kaldı! Sunucumuz şuanda \`${
        member.guild.memberCount
      }\` kişi!`
);
});
////sa-as
client.on('message', async (msg, member, guild) => {
      let i = await  db.fetch(`saas_${msg.guild.id}`)
          if(i === 'açık') {
            if (msg.content.toLowerCase() === 'sa') {
            msg.reply('Aleyküm Selam Hoş Geldin Kanka');     
          } 
          }
        });
    client.on('message', async (msg, member, guild) => {
      let i = await  db.fetch(`saas_${msg.guild.id}`)
          if(i === 'açık') {
            if (msg.content.toLowerCase() === 'selam') {
            msg.reply('Aleyküm Selam Hoş Geldin Kanka');     
          } 
          }
        });
        client.on('message', async (msg, member, guild) => {
          let i = await  db.fetch(`saas_${msg.guild.id}`)
              if(i === 'açık') {
                if (msg.content.toLowerCase() === 'selamun aleyküm') {
                msg.reply('Aleyküm Selam Hoş Geldin Kanka');     
              } 
              }
            });
            client.on('message', async (msg, member, guild) => {
              let i = await  db.fetch(`saas_${msg.guild.id}`)
                  if(i === 'açık') {
                    if (msg.content.toLowerCase() === 'selamın aleyküm') {
                    msg.reply('Aleyküm Selam Hoş Geldin Kanka');     
                  } 
                  }
                });
 /////küfür
                client.on("message", async msg => {
                  const i = await db.fetch(`${msg.guild.id}.kufur`);
                  if (i) {
                    const kufur = [
                      "oç",
                      "OÇ",
                      "AMK",
                      "AQ",
                      "mq",
                      "puşt",
                      "pic",
                      "amq",
                      "annen",
                      "sikmek",
                      "göt",
                      "am",
                      "porn",
                      "porno",
                      "sex",
                      "amk",
                      "ananı sikiyim",
                      "ananıskm",
                      "piç",
                      "amk",
                      "amsk",
                      "sikim",
                      "sikiyim",
                      "orospu çocuğu",
                      "piç kurusu",
                      "kahpe",
                      "orospu",
                      "mal",
                      "sik",
                      "yarrak",
                      "am",
                      "amcık",
                      "amık",
                      "yarram",
                      "sikimi ye",
                      "mk",
                      "mq",
                      "aq",
                      "ak",
                      "amq"
                    ];
                    if (kufur.some(word => msg.content.includes(word))) {
                      try {
                        if (!msg.member.hasPermission("BAN_MEMBERS")) {
                          msg.delete();
                
                          const kinda = new Discord.MessageEmbed()
                
                            .setDescription("Bu Sunucuda Küfür Edemezsin.")
                            .setColor("BLACK");
                
                          return msg.reply(kinda);
                        }
                      } catch (err) {
                        console.log(err);
                      }
                    }
                  }
                  if (!i) return;
                });
                client.on("messageUpdate", msg => {
                  const i = db.fetch(`${msg.guild.id}.kufur`);
                  if (i) {
                    const kufur = [
                      "oç",
                      "OÇ",
                      "AMK",
                      "AQ",
                      "mq",
                      "puşt",
                      "pic",
                      "amq",
                      "annen",
                      "sikmek",
                      "göt",
                      "am",
                      "porn",
                      "porno",
                      "sex",
                      "amk",
                      "ananı sikiyim",
                      "ananıskm",
                      "piç",
                      "amk",
                      "amsk",
                      "sikim",
                      "sikiyim",
                      "orospu çocuğu",
                      "piç kurusu",
                      "kahpe",
                      "orospu",
                      "mal",
                      "sik",
                      "yarrak",
                      "am",
                      "amcık",
                      "amık",
                      "yarram",
                      "sikimi ye",
                      "mk",
                      "mq",
                      "aq",
                      "ak",
                      "amq"
                    ];
                    if (kufur.some(word => msg.content.includes(word))) {
                      try {
                        if (!msg.member.hasPermission("BAN_MEMBERS")) {
                          msg.delete();
                          
                
                          const kinda = new Discord.MessageEmbed()
                            .setDescription("Bu Sunucuda Küfür Edemezsin.")
                            .setColor("BLACK");
                
                          return msg.reply(kinda);
                        }
                      } catch (err) {
                        console.log(err);
                      }
                    }
                  }
                  if (!i) return;
                });
               ///reklamengel
               client.on('message', async message => {
                let aktif = await db.fetch(`reklamEngelcodeshare_${message.channel.id}`)
                if (!aktif) return 
                let reklamlar = ["discord.app", "discord.gg" ,"discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]
                let kelimeler = message.content.slice(" ").split(/ +/g)
                if (reklamlar.some(word => message.content.toLowerCase().includes(word))) {
                if (message.member.hasPermission("BAN_MEMBERS")) return;
                message.delete()
                message.reply('Reklamları engelliyorum!')
                }
                });
                
                client.on("messageUpdate", async (oldMsg, newMsg) => {
                let aktif = await db.fetch(`reklamEngelcodeshare_${oldMsg.channel.id}`)
                if(!aktif) return
                let reklamlar = ["discord.app", "discord.gg","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az", ".cf", ".me", ".in"]
                let kelimeler = newMsg.content.slice(" ").split(/ +/g)
                if (reklamlar.some(word => newMsg.content.toLowerCase().includes(word))) {
                if (newMsg.member.hasPermission("BAN_MEMBERS")) return;
                newMsg.delete()
                oldMsg.reply('Reklamları engelliyorum!')
                }
                });
                
   ///prefix
   client.on('message', message => {
    if (message.content === `<@${client.user.id}>`) {
     message.reply(`PREFIX: **r!**`)
    }
    });
