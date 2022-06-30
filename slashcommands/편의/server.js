const { MessageEmbed, CommandInteraction } = require('discord.js')

module.exports = {
    name: "서버정보",
    description: '해당 서버정보를 알려줘요',
    /**
     * @param { CommandInteraction } Interaction
     */
    async execute(interaction) {
        const style = 'R'
        const date = `<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}` + (style ? `:${style}` : '') + '>'
        const han = new MessageEmbed()
            .setTitle(`${interaction.guild.name} 서버 정보`)
            .setColor(`RANDOM`)
            .addField(":balloon: | 서버 생성일", date, true)
            .addField(":woman: | 서버 멤버", `${interaction.guild.memberCount}명`, true)
            .addField(":red_circle: | 서버 부스트 레벨", `${interaction.guild.premiumTier} 레벨`, true)
            .addField(":red_circle: | 부스트 개수:", `${interaction.guild.premiumSubscriptionCount}개`, true)
            .addField(":speech_balloon: | 텍스트 채널개수", `${interaction.guild.channels.cache.filter(x => x.type === `GUILD_TEXT`).size}개`, true)
            .addField(":loud_sound: | 음성 채널개수", `${interaction.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}개`, true)

            .setThumbnail(interaction.guild.iconURL())

            .setTimestamp()
        interaction.reply({ embeds: [han] })
    }
}