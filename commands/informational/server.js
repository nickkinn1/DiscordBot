module.exports = {
    name: "user",
    description: "Lists the users info.",
    execute(message, args) {
        message.channel.send(`${message.author.displayAvatarURL({format: "png"})}\nYour username: ${message.author.username}\nYour ID: ${message.author.id}`)
    }
}