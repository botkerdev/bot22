const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
  name: "컬러챗",
  description: "Color text",
  options: [
      {
        name: "red",
        description: "빨간색으로 채팅을 씁니다",
        type: "SUB_COMMAND",
        options: [
          {
            name: "text",
            description: "쓸말을 적어주세요",
            type: "STRING",
            required: true,
          },
        ],
      },
      {
        name: "orange",
        description: "주황색으로 채팅을 씁니다",
        type: "SUB_COMMAND",
        options: [
          {
            name: "text",
            description: "쓸말을 적어주세요",
            type: "STRING",
            required: true,
          },
        ],
      },
      {
        name: "cyan",
        description: "하늘색으로 채팅을 씁니다",
        type: "SUB_COMMAND",
        options: [
          {
            name: "text",
            description: "쓸말을 적어주세요",
            type: "STRING",
            required: true,
          },
        ],
      },
      {
        name: "green",
        description: "초록색으로 채팅을 씁니다",
        type: "SUB_COMMAND",
        options: [
          {
            name: "text",
            description: "쓸말을 적어주세요",
            type: "STRING",
            required: true,
          },
        ],
      },
      {
        name: "blue",
        description: "파란색으로 채팅을 씁니다",
        type: "SUB_COMMAND",
        options: [
          {
            name: "text",
            description: "쓸말을 적어주세요",
            type: "STRING",
            required: true,
          },
        ],
      },
  ],

  /**
   * @param {CommandInteraction} interaction
   */

  async execute(interaction) {
    const { options } = interaction;

    try {
        switch (options.getSubcommand()) {
          case "red": {
            var text = interaction.options.getString("text")
            return interaction.reply({
              embeds: [
                new MessageEmbed()
                  .setColor("RED")
                  .setDescription(`\`\`\`diff\n- ${text}\`\`\``),
              ],
            });
          }
          case "orange": {
            var text = interaction.options.getString("text")
            return interaction.reply({
              embeds: [
                new MessageEmbed()
                  .setColor("ORANGE")
                  .setDescription(`\`\`\`css\n[${text}]\`\`\``),
              ],
            });
          }
          case "cyan": {
            var text = interaction.options.getString("text")
            return interaction.reply({
              embeds: [
                new MessageEmbed()
                  .setColor("#2AA198")
                  .setDescription(`\`\`\`json\n"${text}"\`\`\``),
              ],
            });
          }
          case "green": {
            var text = interaction.options.getString("text")
            return interaction.reply({
              embeds: [
                new MessageEmbed()
                  .setColor("GREEN")
                  .setDescription(`\`\`\`diff\n+ ${text}\`\`\``),
              ],
            });
          }
          case "blue": {
            var text = interaction.options.getString("text")
            return interaction.reply({
              embeds: [
                new MessageEmbed()
                  .setColor("BLUE")
                  .setDescription(`\`\`\`ini\n[${text}]\`\`\``),
              ],
            });
          }


        }
      } catch (e) {
      const errorEmbed = new MessageEmbed()
        .setColor("RED")
        .setDescription(`\`\`\` ${e} \`\`\``);
      return interaction.reply({ embeds: [errorEmbed] });
    }
  },
};
