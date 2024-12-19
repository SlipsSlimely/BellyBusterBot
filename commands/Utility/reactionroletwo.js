const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('reactionroletwo')
        .setDescription("Sets up a reaction role message!"),


    async execute(interaction) {

                const male = new ButtonBuilder()
                    .setCustomId('male')
                    .setLabel('Male')
                    .setStyle('Success');

                const female = new ButtonBuilder()
                    .setCustomId('female')
                    .setLabel('Female')
                    .setStyle('Success');

                const furry = new ButtonBuilder()
                    .setCustomId('furry')
                    .setLabel('Furry')
                    .setStyle('Success');

                const row = new ActionRowBuilder()
                    .addComponents(male, female, furry);

                await interaction.reply({
                    content: 'Please press the button for the role that you would like.',
                    components: [row]
                })

            }
          };