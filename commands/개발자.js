module.exports = {
    name:'개발자',//만약 사용자가 보낸것이 (접두사)개발자 라면
    execute(message){
            if (message.author.id=='798742139340980224'){// 봇 개발자 아이디가 맞으면
                    message.reply("봇 개발자 한테만 뜨는 문자")
            }else{// else 는 만약 아닐 떄 라는 뜻 만약 일반 유저 라면
                    message.channel.send("당신은 봇 개발자가 아니에요!")
            }  
    }
}
