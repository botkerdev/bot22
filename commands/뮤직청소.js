module.exports = {
    name: '뮤직청소',
    aliases: ['뮤청'],
    utilisation: '{prefix}뮤직청소',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}님은 뮤직을 재생하지 않았기 때문에 안됩니다. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}님은 뮤직을 재생하지 않았기 때문에 안됩니다. ❌`);

        await queue.clear();

        message.channel.send(`노래목록 청소가 완료되었습니다.`);
    },
};
