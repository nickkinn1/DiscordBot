module.exports = {
    name: "args-info",
    description: "Returns a list of the provided arguments.",
    args: true,
    usage: "<user> <role>",
    execute(message, args) {
        message.channel.send(`Arguments: ${args}`)
    }
}