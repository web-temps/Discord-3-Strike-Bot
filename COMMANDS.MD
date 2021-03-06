# Discord 3 Strike Warning System Command Reference

## Table of Contents

- [About](#about)
- [Tag-Me](#tag-me)
    - [Tag](#tag-me.tag)
- [Warning System](#warn)
    - [Warn](#warn.warn)
    - [List](#warn.list)
    - [Pardon](#warn.pardon)
    - [Kicked](#warn.kicked)
    - [Unkick](#warn.unkick)
    - [Help](#warn.help)


# About <a name = "about"></a>
This bot allows for an administrator to set a custom command prefix. This means that the symbol used in this example (__$__) may not be the one used on your server.  Command names will remain the same, however, with the exception of the `tag` command. The `tag` command may be assigned a different name from server to server as the configuration file allows an admin to change it. A server which uses this function should have information on how to use it displayed on their welcome page.


# Tag-Me <a name = "tag-me"></a>
## Tag <a name = "tag-me.tag"></a>
### Using this function will grant a new user a role on the server. The role that it grants should be configured to allow a user viewing rights to other channels. The purpose of this function is to have a channel where a new user can read a set of rules. Before using the *tag* command, they must to agree to the terms. This command may be named differntly per server as it is defined in the bots configuration file. If a user has been previously kicked using the `warn` command, they will be denied a user role upon calling the `tag` command.
`$tag`


# Warning System <a name = "warn"></a>
## Warn <a name = "warn.warn"></a>
### This function will allow an admin to send a warning to a user. Upon receiving a third warning, the user will be instantly kicked from the server. Once the user has been kicked using this command, they will no longer be allowed to use the `tag` command. A server admin may use the `unkick` command to remove the user from the Previously Kicked database and allow them to use the `tag` command once more.
`$warn <@username> <reason for warning>`


## List <a name = "warn.list"></a>
### A server admin can pull up a user's warning history by using the `list` command.
`$list <@username>`

## Pardon <a name = "warn.pardon"></a>
### A server admin can use this command to clear the strikes against a user. The user's warning history will remain viewable for admins to pull up by using the `list` command.
`$pardon <@username>`

## Kicked <a name = "warn.kicked"></a>
### A server admin can use this command to see the history of a user who has been previously kicked from the guild through using the `warn` command.
`$kicked <@username>`

## Unkick <a name = "warn.unkick"></a>
### A server admin can use this command to remove a user from the *Previously Kicked* Database. The user will once again be allowed to trigger the `tag` command to gain access to the server.
`$unkick <@username>`

## Help <a name = "warn.help"></a>
### To access the help embed with a list of commands, use the `help` command.
`$help`