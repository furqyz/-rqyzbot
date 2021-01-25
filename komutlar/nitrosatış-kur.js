const Discord = require('discord.js');
const data = require('wio.db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Nitro & Satım')
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

message.guild.roles.create({ data: { name: '⚡ | KURUCU' }, reason: 'ayn' }).then(role => {
role.setPermissions(['ADMINISTRATOR']);
role.setColor('#070719');
});
message.guild.roles.create({ data: { name: '✨ | Yönetici' }, reason: 'ayn' }).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#3b0b0b');
});
message.guild.roles.create({ data: { name: 'Staff' } , reason: 'ayn'}).then(role => {
role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);
role.setColor('#ff4000  ');
});
message.guild.roles.create({ data: { name: '・・・・・・・・' }, reason: 'ayn' }).then(s => s.setColor('#ffffff'))
message.guild.roles.create({ data: { name: 'Sponsor' } , reason: 'ayn'}).then(s => s.setColor('#0097af'))
message.guild.roles.create({ data: { name: 'Claimed' }, reason: 'ayn' }).then(s => s.setColor('#8f81f7'))
message.guild.roles.create({ data: { name: 'Supporter' } , reason: 'ayn'}).then(s => s.setColor('#ff4000'))
message.guild.roles.create({ data: { name: 'King Inviter' }, reason: 'ayn' }).then(s => s.setColor('#2efef7'))
message.guild.roles.create({ data: { name: 'Nitro Guard' }, reason: 'ayn' }).then(s => s.setColor('#ff0000'))
message.guild.roles.create({ data: { name: 'Nitro God 🚀' }, reason: 'ayn' }).then(s => s.setColor('#050505'))
message.guild.roles.create({ data: { name: 'Inviter III' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))
message.guild.roles.create({ data: { name: 'Inviter II' }, reason: 'ayn' }).then(s => s.setColor('#29cb79'))
message.guild.roles.create({ data: { name: 'Inviter I' }, reason: 'ayn' }).then(s => s.setColor('#992c2c'))
message.guild.roles.create({ data: { name: 'muted' }, reason: 'ayn' }).then(s => s.setColor('#9f81f7'))

message.guild.channels.create('゜LEGIT゜', {type: 'category'}).then(parent => {
        message.guild.channels.create('LEGIT', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    

message.guild.channels.create('゜🚀゜', {type: 'category'}).then(parent => {
    message.guild.channels.create('🚀 | Yetkili', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(5));
        message.guild.channels.create('yetkili-özel', {type: 'text'}).then(c => c.setParent(parent.id));
    });
    
    
    message.guild.channels.create('゜NITRO', {type: 'category'}).then(parent => {
    message.guild.channels.create('🔔゜announcement', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('💎゜invite-check', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🎁゜event', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🔪゜read-me', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🚀゜drop', {type: 'text'}).then(c => c.setParent(parent.id));
    });

    message.guild.channels.create('゜SELLING', {type: 'category'}).then(parent => {
        message.guild.channels.create('💸゜claimed', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💸゜rewards', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💸゜proof kanıt', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💳゜nitro-selling', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💳゜boost-selling', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💳゜spotify-selling', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💳゜netflix-selling', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💳゜game-selling', {type: 'text'}).then(c => c.setParent(parent.id));
        message.guild.channels.create('💳゜youtube-selling', {type: 'text'}).then(c => c.setParent(parent.id));

        });
    
    message.guild.channels.create('゜GIVEAWAYS', {type: 'category'}).then(parent => {
    message.guild.channels.create('🎁゜giveaways', {type: 'text'}).then(c => c.setParent(parent.id));
    
});
message.guild.channels.create('INVİTE REWARDS', {type: 'category'}).then(parent => {
    message.guild.channels.create('🎁゜nitro-rewards', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🎁゜boost-rewards', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🎁゜spotify-rewards', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🎁゜netflix-rewards', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🎁゜game-rewards', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🎁゜youtube-rewards', {type: 'text'}).then(c => c.setParent(parent.id));
    
});
message.guild.channels.create('゜BOOST INFO', {type: 'category'}).then(parent => {
    message.guild.channels.create('🚀゜booster', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🚀゜boost-info', {type: 'text'}).then(c => c.setParent(parent.id));
    
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
  name: 'nitrosatış-kur'
};