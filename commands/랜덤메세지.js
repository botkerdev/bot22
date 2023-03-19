module.exports = {
    name:"랜덤메세지",
    execute(message){
        const randommsg = ["안녕하세요","안녕","하이","바이"] //괄호안에 메세지 더 추가하시거나 수정하시면됩니다
        const random = Math.floor(Math.random() * randommsg.length)
        message.channel.send({content : `${randommsg[random]}`})
    }
}
