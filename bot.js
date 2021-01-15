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
client.on("message", msg => {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("Aleyküm selam, hoş geldin kanka");
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "selamun aleyküm") {
      msg.reply("Aleyküm selam, hoş geldin kanka");
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "günaydın") {
      msg.reply("Günaydın kanka iyi bir gün geçirmen dileğiyle..");
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "ağla") {
      msg.reply("Sana burdan bir çakarım ağlayı görürsün");
    }  
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "ne yapabilirsin") {
      msg.reply("Aklına gelebilecek her şeyi yapma kapasitem var.  r!yardım yazarak neler yapabildiğime bakabilirsin. Eğer önerin var ise yapımcıma söyleyebilirsin.                                İletişim: instagram; @furqyz");
    }
  });
client.on("message", msg => {
    if (msg.content.toLowerCase() === "!ip") {
      msg.reply("Sunucu IP: 185.171.25.39");
    }
  });
client.on("message", msg => {
    if (msg.content.toLowerCase() === "ip") {
      msg.reply("Sunucu IP: 185.171.25.39");
    }
  });
client.on("message", msg => {
    if (msg.content.toLowerCase() === "IP") {
      msg.reply("Sunucu IP: 185.171.25.39");
    }
  });
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "iyi geceler") {
      msg.reply("iyi geceler, tatlı rüyalar kanka..");
    }
  });
client.on("message", msg => {
    if (msg.content.toLowerCase() === "bb") {
      msg.reply("Görüşürüz, kendine iyi bak <3");
    }
  });
  ///hg bot
  client.on("guildCreate", guild => {
    let kanal = guild.channels.filter(c => c.type === "text").random();
  
    kanal.send(
      "Merhaba, Beni Sunucunuza Eklediğiniz İçin Cok Minnettarım. Size En İyi Şekilde Hizmet Edeceğim."
    )
  });
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
