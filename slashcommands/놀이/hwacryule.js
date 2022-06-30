const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "확률",
    description: "자신의 확률을 봐요!",
    options: [
        {
          name: '확률',
          description: '볼 확률을 적어주세요! 예) 시험점수',
          type: 'STRING',
          required: true
        },
    ],
    async execute(interaction) {

        const 확률 = interaction.options.getString('확률');

        const random1 = Math.floor(Math.random() * 100) + 1
        interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setTitle("확률! ( 가짜 장난 입니다! 믿지 마세요! )")
                    .setColor(`GREEN`)
                    .setDescription(`${확률}의 확률은 ${random1} 입니다!`)
            ]
        })
     }
    }