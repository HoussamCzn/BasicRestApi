const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Renvoie le nom du serveur et le nombre de membres.'),
    async execute(interaction) {
        const name = interaction.guild.name;
        const memberCount = interaction.guild.memberCount
        const createdAtDate = new Date(interaction.guild.createdAt).toISOString().split('T')[0];
        const embed = new EmbedBuilder()
            .setColor(0x800080)
            .addFields(
                {
                    name: 'Nom du serveur',
                    value: name,
                    inline: false
                },
                {
                    name: 'Nombre de membres',
                    value: `${memberCount}`,
                    inline: false
                },
                {
                    name: 'Date de création',
                    value: createdAtDate,
                    inline: false
                },
            );
        
        await interaction.reply({ embeds: [embed] });
    },
};