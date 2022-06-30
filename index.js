const { Client , Intents , Collection, Interaction}  = require('discord.js')
const client = new Client({intents:32767})
const fs = require('fs')
module.exports = client;
const {prefix , token} = require('./config.json')
const { DiscordTogether } = require('discord-together')
client.discordTogether = new DiscordTogether(client);
const mongoose = require("mongoose")
const ping = client.ws.ping;

mongoose.connect("mongodb+srv://5959second:seungtory9923@cluster0.wnuvh.mongodb.net/?retryWrites=true&w=majority", {
useNewUrlParser: true ,  useUnifiedTopology: true 
}).then(console.log("데이터베이스 연결 완료"))

client.once('ready',()=>{
  let number = 0
  setInterval(() => {
      const list = ["개똥이는 오픈소스로 이루어져 있습니다 " , "이 메세지는 3초마다 변경됩니다" , "건의사항이나 버그는 59초안에#7205로 연락주시면 감사하깄습니다" , "접두사는  개똥아 입니다 (예시  개똥아돈받기)" ]
      if(number == list.length) number = 0
      client.user.setActivity(list[number],{
          type:"LISTENING"
      })
      number++
  }, 3000) //몇초마다 상태메세지를 바꿀지 정해주세요 (1000 = 1초)
  console.log("봇이 준비되었습니다")
})







client.on('messageCreate' , message=>{
    if(message.content == "핑"){
        message.reply("퐁")
    }
})

client.on('messageCreate',message=>{
  if(message.content == `${prefix}유튜브`){
      const channel = message.member.voice.channel
      if(!channel) return message.reply("음성채널에 접속해주세요!")
      client.discordTogether.createTogetherCode(channel.id, 'youtube').then(invite =>{
          return message.channel.send(invite.code)
      })
  }
})



client.commands = new Collection()

const commandsFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for(const file of commandsFile){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name , command)
}

client.on('messageCreate' , message=>{
    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if (!command) return
    try{
        command.execute(message,args)
    } catch (error) {
        console.error(error)
    }
})


const style = 'R'
const starttime = `<t:${Math.floor(client.readyAt / 1000)}` + (style ? `:${style}` : '') + '>'
client.on('messageCreate', message => {
    if(message.content == "개똥아업타임"){
        const starttime = `<t:${Math.floor(client.readyAt / 1000)}` + (style ? `:${style}` : '') + '>'
        message.reply(`봇이 온라인 이였던 시간을 알려드릴게요!!\n업타임 : ${starttime}`)
    }
})
client.on('messageCreate',message => {
    if (message.content == "개똥아핑"){
        message.reply(`현재 핑 : ${message.client.ws.ping}ms`)
      }
})

client.on('message', message => {
  if(message.content === `${prefix} 서버나가기`) {
    if(message.author.id != '798742139340980224') return message.reply("봇 제작자만 쓸수있습니다")
    message.channel.send(`${message.author.username}의 의해 3초후에 봇이 서버에서 나갑니다 ㅂㅂ`)
    setTimeout(() => message.guild.leave(), 3000);
  }
})

let cool = 5 * 1000;
let user = {};
let list = [];
let count = 4;
let i = 0;

const cfonts = require('cfonts');
const banner = cfonts.render((`DISCORDBOT`), {
        font: 'block',
        color: 'candy',
        align: 'left',
        gradient: ["red","magenta"],
        lineHeight: 3
    });
console.log(banner.string);

  client.on('message',message=>{
    if(message.content == `${prefix}사용자수`){
      message.channel.send(`${client.users.cache.size}명의 사용자들이 ${client.user.username}와 함께하는중~`)
    }
  })
  client.on('message',message=>{
    if(message.content == `${prefix}서버수`){
 message.channel.send  (`${client.user.username}는 ${client.guilds.cache.size}개의 서버에서 활동중`)
  }})
  
  client.commands = new Collection()

  const command_data = new Array()
  fs.readdirSync('./slashcommands').forEach(dir => {
      const slashcommands_folder = fs.readdirSync(`./slashcommands/${dir}/`).filter(file => file.endsWith('js'))
      for (const file of slashcommands_folder){
          const command = require(`./slashcommands/${dir}/${file}`)
          client.commands.set(command.name, command)
          command_data.push({ name : command.name, description: command.description, options: command.options})
      }
  })
  
  client.on("guildCreate", (guild) => {
      client.guilds.cache.get(guild.id)?.commands.set(command_data)
  })
  
  client.once('ready', () => {
      console.log("BOT START!")
      client.guilds.cache.forEach(guild => {
          client.guilds.cache.get(guild.id)?.commands.set(command_data)
      })
  })
  
  client.on('interactionCreate', async interaction => {
      if (!interaction.isCommand()) return
      if (!client.commands.has(interaction.commandName)) return
      const command = client.commands.get(interaction.commandName)
      await command.execute(interaction)
  })
  
  client.on('messageCreate',message=>{
    if(message.content == "!" + "체스"){
        const channel = message.member.voice.channel
        if(!channel) return message.reply("음성채널에 접속해주세요!")
        client.discordTogether.createTogetherCode(channel.id, 'chess').then(invite =>{
            return message.channel.send(invite.code)
        })
    }
})

client.on('messageCreate',message=>{
    if(message.content == "!" + "낚시"){
        const channel = message.member.voice.channel
        if(!channel) return message.reply("음성채널에 접속해주세요!")
        client.discordTogether.createTogetherCode(channel.id, 'fishing').then(invite =>{
            return message.channel.send(invite.code)
        })
    }
})

client.on('messageCreate',message=>{
    if(message.content == "!" + "마피아"){
        const channel = message.member.voice.channel
        if(!channel) return message.reply("음성채널에 접속해주세요!")
        client.discordTogether.createTogetherCode(channel.id, 'betrayal').then(invite =>{
            return message.channel.send(invite.code)
        })
    }
})






client.login("")
