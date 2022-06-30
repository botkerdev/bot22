module.exports = {
    name: "서버",
    execute(message){
        const Discord = require('discord.js')
        const Embed = new Discord.MessageEmbed()
        message.reply(Embed.setColor("#D8BEE4").addField("서버 이름",message.guild.name).addField("인원수",`${message.guild.memberCount}명`).addField("서버주인",`<@${message.guild.ownerID}>`))
    }
}