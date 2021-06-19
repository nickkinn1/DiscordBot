module.exports = {
    name: "server",
    description: "Returns the server name.",
    execute(message, args) {
        message.channel.send("The server name is " + message.guild.name);
    }
}