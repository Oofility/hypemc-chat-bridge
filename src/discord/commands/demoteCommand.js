process.on('uncaughtException', function (err) {console.log(err.stack);});
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../../../config.json')

module.exports = {
	data: new SlashCommandBuilder()
    .setName("demote")
    .setDescription("(Moderator Command) Demotes the given user by one guild rank.")
    .addStringOption(option => option.setName("name").setDescription("Username").setRequired(true)),

    async execute(interaction, client, member) {
        if ((await member).roles.cache.has(config.discord.commandRole)) {
            const name = interaction.options.getString("name");
            bot.chat(`/g demote ${name}`)
            await interaction.reply({ content: 'Command has been executed successfully.', ephemeral: true })
        } else {
            await interaction.reply({ content: 'You do not have permission to run this command.', ephemeral: true })
        }
    }
}