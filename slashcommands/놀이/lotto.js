const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "로또번호",
    description: "로또 번호를 봐요.",
    options: [
        {
            name: "로또번호",
            description: "자신이 생각하는 로또 번호를 입력해주세요!",
            type: "STRING",
            required: true
        },
    ],
    async execute(interaction) {

        const 로또번호 = interaction.options.getString('로또번호')
        // 랜덤 함수
        const random1 = Math.floor(Math.random() * 45) + 1 
        const random2 = Math.floor(Math.random() * 45) + 1
        const random3 = Math.floor(Math.random() * 45) + 1
        const random4 = Math.floor(Math.random() * 45) + 1
        const random5 = Math.floor(Math.random() * 45) + 1
        const random6 = Math.floor(Math.random() * 45) + 1

        interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setTitle("로또 번호입니다")
                    .setColor(`GREEN`)
                    .setDescription(`${로또번호}는 사실 ${random1}, ${random2}, ${random3}, ${random4}, ${random5}, ${random6}였어요!`)
            ]
        })
    }
}