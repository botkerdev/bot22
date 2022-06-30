const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "역할관리",
    description: "역할을 관리합니다.",
    permission: "MANAGE_ROLES",
    options: [
        {
            name: "역할",
            description: "추가하거나 제거할 역할을 선택해주세요.",
            type: "ROLE",
            required: true,
        },
        {
            name: "유저",
            description: "역할을 부여할 유저를 선택해주세요.",
            type: "USER",
            required: false,
        },
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const { options } = interaction;
        const role        = options.getRole("역할");
        const target      = options.getMember("유저") || interaction.member;
        const embed       = new MessageEmbed()
                            .setColor(`#${interaction.guild.roles.cache.get(role.id).color.toString(16)}`)
                            .setTitle("🛠 역할관리 🛠 ");

        if (!role.editable || role.position === 0) {
            embed.setDescription(`당신은 ${role}을 관리할 권한이 없습니다`)
            return interaction.reply({ embeds: [embed], ephemeral: true })
        }
        
        embed.setDescription(target.roles.cache.has(role.id) ? `${role}권한을 ${target}에서 제거 시켰어요!.` : `${role}권한을 ${target}님에게 부여 하였어요!.`);
        target.roles.cache.has(role.id) ? target.roles.remove(role) : target.roles.add(role);
        const message = await interaction.reply({embeds: [embed], fetchReply: true});
    }
}