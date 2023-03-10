const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require('discord.js')
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

        for (let i = 0; i < list.length; ++i) {
            const Embed = new EmbedBuilder()
            .setColor(0x800080)
            .setTitle(`Définition ${i + 1}: `)
            .addFields(
                {
                    name: mot,
                    value: list[i].definition
                },
            )

            await interaction.channel.send({ embeds:[Embed] })
        }
    }
}