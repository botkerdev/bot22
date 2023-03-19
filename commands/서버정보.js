const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "서버정보",
    async execute(message) {
        const han = new MessageEmbed()
            .setTitle(`${message.guild.name} 서버 정보`)
            .addField(":white_circle: | 서버 이름",`${message.guild.name}`)
            .addField(":key:| 서버 아이디",`${message.guild.id}`)
            .addField(":balloon: | 서버 생성일",`${message.guild.createdAt}`)
            .addField(":woman: | 서버 멤버",`${message.guild.memberCount}명`)
            .addField(":red_circle: | 서버 부스트 레벨",`${message.guild.premiumTier} 레벨`)
            .addField(":red_circle: | 부스트 개수:",`${message.guild.premiumSubscriptionCount}개`)
            .addField(":speech_balloon: | 텍스트 채널개수",`${message.guild.channels.cache.filter(x => x.type === "text").size}개`)
            .addField(":loud_sound: | 음성 채널개수",`${message.guild.channels.cache.filter(x => x.type === "voice").size}개`)
        
            .setThumbnail(message.guild.iconURL())
       
            .setTimestamp()
            message.reply({ embeds: [han] })
            }

        }
