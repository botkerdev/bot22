const Discord = require('discord.js');
var vote = [];
var voteAdmin = [];
var votes = false;

module.exports = {
        name: "투표",
        description: "투표를 생성해요.",
        options: [
             {
        name: "주제",
        description: "주제를 입력해주세요.",
        type: "STRING",
        required: true
             },
             {
        name: "항목1",
        description: "첫번째 항목이예요.",
        type: "STRING",
        required: true
             },
             {
       name: "항목2",
       description: "2번째 항목이예요.",
       type: "STRING",
        required: true
        },
                      ],
                      
async execute(interaction) {
voteAdmin.push(interaction.user.id)
try{
votes = false


var msg = interaction; // interaction를 msg로 선언
var id = msg.user.id;
const subject = msg.options.getString('주제'); // 항목[1]을 subject로 선언
const one = msg.options.getString('항목1'); // 항목[1]을 one로 선언
const two = msg.options.getString('항목2'); // 항목[2]을 two로 선언
var on = 0;
var tw = 0;

const embed = new Discord.MessageEmbed() 
.setTitle('**' + msg.user.tag + '님의 투표**')
.setDescription('투표의 주제는 **' + subject + '**입니다.')
.setColor('#000001')
.setTimestamp()

const row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setCustomId('yes')
.setLabel(`${one}`)
.setStyle('SUCCESS'),
 )
.addComponents(
new Discord.MessageButton()
.setCustomId('no')
.setLabel(`${two}`)
.setStyle('SUCCESS')
)
.addComponents(
new Discord.MessageButton()
.setCustomId('noo')
.setLabel(`종료`)
.setStyle('SUCCESS')
)

await msg.reply({ content: "투표를 성공적으로 생성하였어요.", ephemeral: true })

msg.channel.send({embeds: [embed], components: [row]}).then(async (collector) => { 
collector.createMessageComponentCollector().on('collect', async i => {
if (i.customId === 'noo' && i.customId != "yes" && i.customId != "no" && votes == false) {
if (interaction.user.id != i.user.id) {
return await i.reply({ content: "투표를 생성한 사람만 종료가 가능해요!", ephemeral: true})
}else{
const embe = new Discord.MessageEmbed()
.setTitle('**' + msg.user.tag + '님의 투표**')
.setDescription(one + ": **" + on + "**\n" + two + ": **" + tw + "**")
.setColor('#000001')

votes = true
vote = []
voteAdmin = []
await i.reply({content: "종료 완료!", ephemeral: true})
await i.channel.send({embeds: [embe]})
}
}

if (i.customId == "yes" && i.customId != "no" && i.customId != "noo"&& votes == false) {
if (!vote.includes(i.user.id)){
await i.reply({content: one + "투표완료", ephemeral: true})
vote.push(i.user.id);
on = on + 1
}else{
await i.reply({content: "이미 투표하셨어요.", ephemeral: true})
}
}
if (i.customId === 'no' && i.customId != "yes" && i.customId != "noo"&& votes == false) {
if (!vote.includes(i.user.id)){
await i.reply({content: two + "투표완료", ephemeral: true})
vote.push(i.user.id);
tw = tw + 1
}else{
await i.reply({content: "이미 투표하셨어요.", ephemeral: true})
}
}
})
})
}catch(error) {
console.log("" + error)
}
}
} 
