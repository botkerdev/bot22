const { MessageAttachment, MessageEmbed } = require("discord.js");

const axios = require("axios");

module.exports = {
  name: "울프람알파",
  description: "울프람알파 API를 이용하여 수식을 계산합니다.",
  options: [
    {
      name: "수식",
      description: "계산할 수식을 입력해주세요.",
      type: "STRING",
      required: true,
    },
  ],
  async execute(interaction) {
    await interaction.deferReply();

    const query = interaction.options.getString("query");

    const error = new MessageEmbed().setColor(`#FF0000`);

    const appId = ""; // 울프람알파 앱 ID, https://developer.wolframalpha.com/portal/ 회원가입 후 앱 만들기로 ID 얻기 (이메일 인증 필수)

    const URL = `https://api.wolframalpha.com/v1/simple?appid=${appId}&i=${query}&layout=labelbar&fontsize=20`;

    const res = await axios
      .get(URL, {
        timeout: 5 * 1000,
        responseType: "arraybuffer",
      })
      .catch(() => {});

    if (res?.status !== 200 || !res.data) {
      return interaction.editReply({
        embeds: [error.setDescription(`검색/계산 결과가 존재하지 않습니다.`)],
      });
    }

    const attachment = new MessageAttachment(
      Buffer.from(res.data, "utf-8"),
      "solution.png"
    );

    const embed = new MessageEmbed()
      .setImage("attachment://solution.png")
      .setColor(`#000000`);

    await interaction.editReply({ embeds: [embed], files: [attachment] });
  },
};