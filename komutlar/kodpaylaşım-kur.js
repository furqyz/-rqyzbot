const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('KOD & Paylaşım Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanallar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: 'KURUCU' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: 'YARDIMCI' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: 'MODERATOR' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: 'DESTEK' } , reason: 'ayn'}).then(s => s.setColor('#0097af'))
message.guild.roles.create({ data: { name: 'YARDIM' }, reason: 'ayn' }).then(s => s.setColor('#8f81f7'))
message.guild.roles.create({ data: { name: 'KOD-ROL' } , reason: 'ayn'}).then(s => s.setColor('#ff4000'))
message.guild.roles.create({ data: { name: 'KAYIT-ROL' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: 'FRİEND' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'KOD-PAYLAŞIM' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'ZÜMRÜT-KODLAR' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: 'ELMAS-KODLAR' }, reason: 'ayn' }).then(s => s.setColor('#050505'))
message.guild.roles.create({ data: { name: 'ALTIN-KODLAR' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: 'ALTYAPILAR' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: 'JS.' }, reason: 'ayn' }).then(s => s.setColor('#992c2c'))
message.guild.roles.create({ data: { name: 'JS2' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'ŞABLON' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'TEMA' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'HTML' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
    

message.guild.channels.create('゜SERVER゜', {type: 'category'}).then(parent => {
    message.guild.channels.create('🚀 | SPECIAL', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('mod-chat', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜BOOSTER゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('❤️゜booster', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('❤️゜booster-info', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('゜GIVEAWAYS', {type: 'category'}).then(parent => {
        message.guild.channels.create('🎁゜giveaways', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎁゜invite', {type: 'text'}).then(c => c.setParent(parent.id));
        
    });

    message.guild.channels.create('📌゜YOUTUBE゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💬゜video-duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜video-öneri', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜hakkımızda', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜sosyal-medya', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜ABOUT ゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💋゜kayıt-kanal', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💋゜Welcome', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔔゜duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎁゜kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜güncellemeler', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎉゜çekiliş', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎉゜anket', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜REKLAM゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🔎゜reklam-sunucu', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜reklam-bot', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜CHAT゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💬゜sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜abone-sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜galeri', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('゜SERVER゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('SOHBET', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
            message.guild.channels.create('DESTEK', {type: 'text'}).then(c => c.setParent(parent.id));
        });
    message.guild.channels.create('📌゜HOW゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🌸゜rol-alma', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🌸゜altyapı-alma', {type: 'text'}).then(c => c.setParent(parent.id));

    });
    message.guild.channels.create('📌゜HELP゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🔥゜destek', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜abone-destek', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('🔥゜hata', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜hatalı-kodlar', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜istek-kodlar', {type: 'text'}).then(c => c.setParent(parent.id));   
    });

    message.guild.channels.create('📌゜HELP2゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜discord-yardım', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('゜html-yardım', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('゜kod-yardım', {type: 'text'}).then(c => c.setParent(parent.id));
        
    });

    message.guild.channels.create('📌゜SERVERS゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜sunucularımız', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('゜kod-logs', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜ZÜMRÜT゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜zumrut-kod', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜ELMAS゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜elmas-kod', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜ALTIN゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜altın-kod', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜ALTYAPILAR゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜JAVASCRIPT-1゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜JAVASCRIPT-2゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜ŞABLON゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜TEMA゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜HTML゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜MODUL YARDIM゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜PARTNER゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('゜örnek', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
}

exports.help = {
  name: 'kodpaylaşım-kur'
};