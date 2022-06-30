const { Permissions } = require("discord.js")

module.exports = {
name: "청소",
description: "채널에 메세지를 삭제해요",
options: [
{
name: "개수",
description: "삭제할 개수",
type: "INTEGER",
required: false,
        },
    ],
    
async execute(interaction){
var msg = interaction;
const number = msg.options.getInteger('개수');

if (!number) {
var num = Math.floor(Math.random() * 99)
msg.channel.bulkDelete(Number(num) + 1)
await msg.reply("삭제할 개수를 입력하지 않아 랜덤으로 " + `${Number(num) + 1}` + "개의 메세지를 청소했어요!")
}

if (!msg.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return msg.channel.send({ content: "이 명령어는 관리자만 사용가능해요!", ephemeral: true})
if (number > 100) return msg.reply({ content: "100개가 넘는 수량은 삭제할수 없어요.", ephemeral: true})
if (number < 1) return msg.reply({ content: "1개보다 적은 수량은 삭제할수 없어요.", ephemeral: true})

msg.channel.bulkDelete(number)
await msg.reply("메세지를 성공적으로 삭제했어요.")
}
}