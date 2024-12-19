const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('eighteen')
        .setDescription("Sets up a reaction role message!"),


    async execute(interaction) {

                const adult = new ButtonBuilder()
                    .setCustomId('adult')
                    .setLabel('Confirm & Enter')
                    .setStyle('Success');


                const row = new ActionRowBuilder()
                    .addComponents(adult);

                await interaction.reply({
                    content: 'Please press this button only if you have read the above rules and are over the age of 18.',
                    components: [row]
                })

            }
          };