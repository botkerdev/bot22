module.exports = {
    name: "강퇴",
    description: "유저를 추방하거나 차단합니다.",
    options: [
    {
    name: "유저",
    description: "강퇴할 유저를 선택해주세요.",
    type: "USER",
    required: true
    },
    {
    name:"type",
    description:"해당 값을 선택해주세요.",
    choices: [
    { name: "추방", value: "추방" },
    { name: "차단", value: "차단" },
    ],
    type: "STRING",
    required: true
    },
    {
    name: '사유',
    description: "사유를 입력해주세요.",
    type: "STRING",
    required: false
    }
        ],
    async execute(interaction){
    var msg = interaction;
    const value = msg.options.getString("type")
    const user = interaction.options.getMember('유저')
    const reason = interaction.options.getString("사유")
    
    if (value == "추방") {
    user.kick()
    await msg.reply({ content: "<@" + user + "> 님을 추방하였습니다.", ephemeral: true })
    }
    
    if (value == "차단") {
    user.ban({ reason: reason })
    await msg.reply({ content: "<@" + user + "> 님을 차단하였습니다.", ephemeral: true })
    }
    } 
    }