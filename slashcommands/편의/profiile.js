const { MessageEmbed } = require('discord.js')

module.exports = {
    name: '프로필',
    description: "유저 프로필을 크게 확대합니다!",
        options: [
          {
            name: '확대할유저',
            description: '확대할 유저를 선택해주세요!',
            type: 'USER',
            required: true
          }
        ],
    async execute(interaction) {
        const 확대할유저 = interaction.options.getMember('확대할유저');
      const embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("유저 프로필을 확대했습니다!")
      .setDescription("유저프로필을 다운로드 등으로 생긴문제는 책임지지 않습니다!")
      .setImage(확대할유저.displayAvatarURL())
      interaction.reply({ embeds: [embed] })
    }
  }
