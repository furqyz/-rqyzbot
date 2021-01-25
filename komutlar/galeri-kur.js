const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Gif & Foto Tema')
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

message.guild.roles.create({ data: { name: 'OWNER' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: 'STAFF' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: 'MOD' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: 'GENERAL AUTHORİTY' } , reason: 'ayn'}).then(s => s.setColor('#0097af'))
message.guild.roles.create({ data: { name: 'DİSCORD AUTHORİTY' }, reason: 'ayn' }).then(s => s.setColor('#8f81f7'))
message.guild.roles.create({ data: { name: 'GALLERY' } , reason: 'ayn'}).then(s => s.setColor('#ff4000'))
message.guild.roles.create({ data: { name: 'MODERATOR' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: 'SPONSOR' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: 'PHOTO MASTER' }, reason: 'ayn' }).then(s => s.setColor('#050505'))
message.guild.roles.create({ data: { name: 'PHOTO TEACHER' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: 'PHOTO STUDENT' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: 'GİF MASTER' }, reason: 'ayn' }).then(s => s.setColor('#992c2c'))
message.guild.roles.create({ data: { name: 'GİF TEACHER' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'SPECIAL MEMBERS' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'MEMBERS' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
message.guild.roles.create({ data: { name: 'INDIFFERENT' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))
    

message.guild.channels.create('゜OWNER゜', {type: 'category'}).then(parent => {
    message.guild.channels.create('🚀 | SPECIAL', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('mod-chat', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜XXX ゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💋゜Welcome', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔔゜announcement', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎁゜prize', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜role-information', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎉゜levels', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜CHAT゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💬゜chat-tr', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💬゜chat-eng', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜G!F゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🔎゜gif-search', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔎゜gif-about', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜WOMAN゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🌸゜woman-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🌸゜woman-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🌸゜smoke-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🌸゜smoke-photo', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜MAN゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🔥゜man-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜man-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜msmoke-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🔥゜smoke-photo', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜COUPLE゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('❤️゜couple-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('❤️゜couple-photo', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜WALLPAPER゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('📱゜for-phone', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜WALLPAPER゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('💻゜for-pc', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜ANIMAL゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🐼゜animal-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🐼゜animal-photo', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜POLICE゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🚓゜police-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🚓゜police-photo', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜NEON゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('⚠゜neon-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⚠゜neon-photo', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    message.guild.channels.create('📌゜FAMOUS゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('⭐゜famous-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜billie-eilish-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜billie-eilish-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜barbara-palvin-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜barbara-palvin-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜tom-cruise-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜tom-cruise-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜johnny-depp-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜johnny-depp-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜dwayne-johnson-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜dwayne-johnson-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜kivanc-tatlitug-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜kivanc-tatlitug-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜cagatay-ulusoy-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('⭐゜cagatay-ulusoy-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        
    });
    message.guild.channels.create('📌゜TV-SERIES゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🎬゜lucifer-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜lucifer-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜witcher-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜witcher-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜lacasadepapel-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜lacasadepapel-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜thomas-shelby-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜thomas-shelby-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜the100-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜the100-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜ezel-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜ezel-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜breaking-bad-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜breaking-bad-photo', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜rickandmorty-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎬゜rickandmorty-photo', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('📌゜GAMES゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('🎮゜games-gif', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('🎮゜games-photo', {type: 'text'}).then(c => c.setParent(parent.id));
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
  name: 'galeri-kur'
};