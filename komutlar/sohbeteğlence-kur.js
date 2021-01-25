const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Sohbet & Eğlence Tema')
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
message.guild.roles.create({ data: { name: 'GENEL YETKİLİ' } , reason: 'ayn'}).then(s => s.setColor('#0097af'))
message.guild.roles.create({ data: { name: 'KADRO' }, reason: 'ayn' }).then(s => s.setColor('#8f81f7'))
message.guild.roles.create({ data: { name: 'DESTEK' } , reason: 'ayn'}).then(s => s.setColor('#ff4000'))
message.guild.roles.create({ data: { name: 'BAN-HAMMER' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: 'KICK-HAMMER' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'SPOR USTASI' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'KİTAP USTASI' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: 'AKTİF ÜYE' }, reason: 'ayn' }).then(s => s.setColor('#050505'))
message.guild.roles.create({ data: { name: 'KONUŞKAN' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: 'EĞLENCESEVER' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: 'SOSYAL MEDYA UZMANI' }, reason: 'ayn' }).then(s => s.setColor('#992c2c'))
message.guild.roles.create({ data: { name: 'MÜZİKAL' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'ÜYE' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'YENİ ÜYE' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'MUTED' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
    

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

    message.guild.channels.create('📌゜BILGILENDIRME゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💬゜kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜rol-sistemi', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜covid-19', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜KAYIT ゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💋゜kayıt-kanal', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💋゜SES-TEYİT', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('💋゜SES-TEYİT', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
    });

        message.guild.channels.create('📌゜HAKKINDA ゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💋゜Welcome', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔔゜duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜güncellemeler', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎉゜çekiliş', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎉゜anket', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜SERVER゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🔎゜reklam-sunucu', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜reklam-diğer', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜GENEL゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💬゜sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜günlük', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜owo-zoo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜SOHBET', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('💬゜SOHBET2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
    });
    message.guild.channels.create('📌゜EĞLENCE゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🔥゜felsefe', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜hayaller', {type: 'text'}).then(c => c.setParent(parent.id))
        message.guild.channels.create('🔥゜özlü-sözler', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜hayat-dersi', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜anılar-dertler', {type: 'text'}).then(c => c.setParent(parent.id));  
        message.guild.channels.create('🔎゜tarafını-seç', {type: 'text'}).then(c => c.setParent(parent.id)); 
    });

    message.guild.channels.create('📌゜EĞLENCE゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🎮゜bom', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎮゜tuttu-tutmadı', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎮゜kelime-türetmece', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎮゜sayı-devam', {type: 'text'}).then(c => c.setParent(parent.id));
        
    });

    message.guild.channels.create('📌゜SOSYAL MEDYA゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('📝゜instagram', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('📝゜twitter', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('📝゜twitch', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('📝゜youtube', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('📝゜facebook', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('📝゜diğer', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜DALLAR゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🎬゜edit', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜dizi', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜film', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎨゜çizim', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('📚゜kütüphane', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('📙゜karikatür', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎮゜oyun', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜SPOR゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('⚽゜futbol', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🏀゜basketbol', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🏆゜gym', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜diğer', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜GÜNDEM゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💥゜tarih', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💥゜haber', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💥゜hava-durumu', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜MUSIC゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🎶゜müzik-1', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎶゜müzik-2', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎶゜MÜZİK', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('🎶゜MÜZİK', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('🎶゜RADYO', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('🎶゜EKİP-MÜZİK', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));

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
  name: 'sohbeteğlence-kur'
};