const { SlashCommandBuilder } = require('discord.js')
const { request } = require('undici')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('urban')
        .setDescription('Recherche un mot sur Urban Dictionary')
        .addStringOption(option =>
            option.setName('mot')
                .setDescription('Le mot à rechercher')
                .setRequired(true)),
    async execute(interaction) {
        const mot = interaction.options.getString('mot')
        const req = await request(`https://api.urbandictionary.com/v0/define?term=${mot}`)
        const { list } = await req.body.json()
        const definition = list[0].definition
        await interaction.reply(`**${mot}**: ` + definition)
    }
}