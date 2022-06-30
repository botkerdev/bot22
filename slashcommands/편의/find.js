const Discord = require('discord.js'); 

module.exports = {
             name: "통합",
             description: "4가지 웹사이트에서 검색을 해요",
             options: [
                 {
             name: "검색",
             description: "4가지 웹사이트에서 검색을 해요",
             type: "SUB_COMMAND",
             options: [
                 {
            name: "검색어",
           description: "검색어를 입력해주세요.",
           type: "STRING",
           required: true
               }
                           ],
                 }
                           ],
                     
async execute(interaction){
const message = interaction.options.getString("검색어")

const name = interaction.user.username
const id = interaction.user.id
const tag = interaction.user.tag

const embed = new Discord.MessageEmbed()
.setTitle(tag + "님의 검색 결과")
.setDescription("[" + message + "](https://www.youtube.com/results?search_query=" + encodeURI(message) + ")검색 결과입니다.\n아래 바로가기 버튼을 사용해주세요.")
.setColor("#ffffff")
.setTimestamp()

const row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel("Google")
.setStyle("LINK")
.setURL("https://www.google.com/search?q=" + encodeURI(message))
)
.addComponents(
new Discord.MessageButton()
.setLabel("Youtube")
.setStyle("LINK")
.setURL("https://www.youtube.com/results?search_query=" + encodeURI(message))
)
.addComponents(
new Discord.MessageButton()
.setLabel("Naver")
.setStyle("LINK")
.setURL("https://m.search.naver.com/search.naver?sm=tab_hty.top&where=m&query=" + encodeURI(message))
)
const row2 = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel("Bing")
.setStyle("LINK")
.setURL("https://www.bing.com/search?q=" + encodeURI(message))
)
.addComponents(
new Discord.MessageButton()
.setLabel("Daum")
.setStyle("LINK")
.setURL("https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=" + encodeURI(message))
)
.addComponents(
new Discord.MessageButton()
.setLabel("Coupang")
.setStyle("LINK")
.setURL("https://m.coupang.com/nm/search?q=%ED%85%8C%EC%8A%A4%ED%8A%B8" + encodeURI(message))
)

interaction.reply({ embeds: [embed], components: [row, row2] })
}
}