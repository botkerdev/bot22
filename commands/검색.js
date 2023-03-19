const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
    name:"검색",
    execute(message, args, args1){
        const hello = args[0]
        const link = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${hello}`
        const link1 = `https://www.google.com/search?q=${hello}`
        const link2 = `https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=${hello}`
        const link3 = `https://www.bing.com/search?q=${hello}`
        const embed = new MessageEmbed()
        .setTitle("통합 검색")
        .setDescription(`${hello}를 4가지 사이트에서 검색했어요!`)
      
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('LINK')
            .setLabel('Google') //버튼 이름
            .setURL(link1)
        )
      .addComponents(
            new MessageButton()
            .setStyle('LINK')
            .setLabel('NAVER') //버튼이름
            .setURL(link)
        )
      .addComponents(
            new MessageButton()
            .setStyle('LINK')
            .setLabel('Daum') //버튼 이름
            .setURL(link2)
        )
        .addComponents(
            new MessageButton()
            .setStyle('LINK')
            .setLabel('Bing') //버튼이름
            .setURL(link3)
        )
        message.reply({embeds : [embed], components: [row]})
    }
}
