const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Renvoie des informations sur l\'utilisateur mentionné ou le serveur.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Renvoie des informations sur un utilisateur.')
                .addUserOption((option) =>
                    option
                        .setName('cible')
                        .setDescription('L\'utilisateur dont vous voulez les informations.')
                        .setRequired(false),
                ))
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Renvoie le nom du serveur et le nombre de membres.')),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        if (subcommand === 'user') {
            const user = interaction.options.getUser('cible') || interaction.user;
            const member = interaction.guild.members.cache.get(user.id);
            const { username, discriminator, id, avatar } = user;
            const createdAtDate = new Date(user.createdAt).toISOString().split('T')[0]
            const joinedAtDate = new Date(member.joinedAt).toISOString().split('T')[0];
            const embed = new EmbedBuilder()
                .setAuthor({
                    name: `${username}#${discriminator}`,
                    iconURL: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
                    url: `https://discord.com/users/${id}`
                })
                .setColor(0x800080)
                .addFields(
                    {
                        name: 'Nom',
                        value: username,
                        inline: false
                    },
                    {
                        name: 'Date de création du compte',
                        value: createdAtDate,
                        inline: false
                    },
                    {
                        name: 'Date d\'arrivée sur le serveur',
                        value: joinedAtDate,
                        inline: false
                    },
                );

            await interaction.reply({ embeds: [embed] });
        } else if (subcommand === 'server') {
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
        }
    }
}