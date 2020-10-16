// 'general' channel
const cmd = require('../../common/util/Command').command;
const ModActions = require('../actions/ModActions');
async function on(message, client) {
    if (!(message.author === client.user) &&
        message.channel.name === process.env.TAG_ME_CHANNEL) {
        let command = cmd(message.content);
        if (command) {
            try {
                await channelCommands(command, message);
            } catch (err) {
                await replyWithErrorMessage(message, err.message);
            }

        }


    }
}
// [Commands]
async function channelCommands(command, message) {
    switch (command.directive) {
        // Assign role 'user'
        case process.env.TAG_COMMAND:
            console.log("Assigning role `user` to: ", message.member.user.username);
            await ModActions.assignRole(message);
            break;
        default:
            await message.channel.send(`Type \`!${process.env.TAG_COMMAND}\` to be assigned the role of ${process.env.ROLE_TO_ASSIGN}.`);
            break;
    }

}

exports.on = on