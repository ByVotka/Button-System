const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

let config = {
"ck": "Çekiliş Katılımıcısı Rol ID",
"et": "Etkinlik Katılımcısı Rol ID",
"botOwner": "Bot Sahibinin ID",
"token": "Bot Token"
};

client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === ".button" && config.botOwner == message.author.id) {
    let ck = new disbut.MessageButton().setStyle('green').setLabel('Çekiliş Katılımcısı').setID('ck')
    let ek = new disbut.MessageButton().setStyle('red').setLabel('Etkinlik Katılımcısı').setID('ek')
    message.channel.send('Aşağıdaki Butonlardan Herhangi Birine Tıklayarak Çekiliş Katılımcısı veya Etkinlik Katılımcısı rolüne Sahip Olabilirsiniz.', {
        buttons: [ck, et]
    });
}
});

client.on('clickButton', async (button) => {
    if (button.id === 'ck') {
        if (button.clicker.member.roles.cache.get(config.ck)) {
            await button.clicker.member.roles.remove(config.ck);await button.think(true);await button.reply.edit("Çekiliş Katılımcısı rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.ck);await button.think(true);await button.reply.edit("Çekiliş Katılımcısı rolü üzerinize verildi.")
        }
    }
    if (button.id === 'et') {
        if (button.clicker.member.roles.cache.get(config.et)) {
            await button.clicker.member.roles.remove(config.et);await button.think(true);await button.reply.edit("Etkinlik Katılımcısı rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.et);await button.think(true);await button.reply.edit("Etkinlik Katılımcısı rolü üzerinize verildi.")
        }

    }
 
});


client.login(config.token)
