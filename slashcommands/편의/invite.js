module.exports = {
    name:"봇초대",
    description:"봇 초대링크",
    async execute(interaction){
        await interaction.reply("https://discord.com/api/oauth2/authorize?client_id=971978105994498078&permissions=8&scope=applications.commands%20bot")
    }
}
