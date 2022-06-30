const { MessageEmbed } = require('discord.js')

module.exports = {
    name: '임베드',
    description: "임베드를 만들어요! ( 안적었을시 null로 표시되요! )",
        options: [
          {
            name: '제목',
            description: '임베드의 제목을 입력해주세요!',
            type: 'STRING',
            required: true
          },
          {
            name: '설명',
            description: '임베드의 설명을 입력해주세요!',
            type: 'STRING',
            required: false
          },
          {
            name: '필드이름',
            description: '임베드의 필드이름을 입력해주세요!',
            type: 'STRING',
            required: false
          },
          {
            name: '필드설명',
            description: '임베드의 필드설명을 입력해주세요!',
            type: 'STRING',
            required: false
          },
          {
            name: '밑설명',
            description: '임베드의 밑설명을 입력해주세요!',
            type: 'STRING',
            required: false
          },
        ],
    async execute(interaction) {
        const 제목 = interaction.options.getString('제목');
        const 설명 = interaction.options.getString('설명');
        const 필드이름 = interaction.options.getString('필드이름');
        const 필드설명 = interaction.options.getString('필드설명');
        const 밑설명 = interaction.options.getString('밑설명');

      const embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle(`${제목}`)
      .setDescription(`${설명}`)
      .setFields(
        { name: `${필드이름}`, value: `${필드설명}`, inline: true },
      )
      .setFooter(`${밑설명}`)
      interaction.reply({ embeds: [embed] })
    }
  }