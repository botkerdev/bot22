const { Client, Intents, Collection } = require('discord.js');
const client = ("./index.js")

module.exports = {
        name: "공지",
        description: "봇이 들어가있는 모든서버에 공지를 해요",
        options: [
             {
        name: "메세지",
        description: "보낼 메세지를 입력해주세요",
        type: "STRING",
        required: true
             }
                       ],
      
async execute(interaction) {
var index = 0;
var msg = interaction;
const message = msg.options.getString('메세지');
const id = msg.user.id

if (id == "798742139340980224","967245915574398986") {
msg.reply({ content: "성공적으로 명령어를 사용했어요.", ephemeral: true })
msg.client.guilds.cache.forEach(guild => {
if (guild.systemChannel) {
guild.systemChannel.send({ content: `${message}` })
index = index + 1
}

if (!guild.systemChannel) {
console.log(guild.name)
}
})

msg.channel.send(`${index}개의 서버에 공지를 보냈어요.`)
}else{
msg.reply({ content: "이 명령어는 봇 개발자만 사용 가능해요", ephemeral: true })
}
}
}
