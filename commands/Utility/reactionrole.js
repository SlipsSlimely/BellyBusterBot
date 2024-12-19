//const { ActionRowBuilder, MessageButton, ButtonStyle, MessageActionRow, MessageEmbed, SlashCommandBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
    // This is currently a feature i'm developing, still a little buggy
    data: new SlashCommandBuilder()
        .setName('reactionrole')
        .setDescription("Sets up a reaction role message!"),


    async execute(interaction) {

                
                const rp = new ButtonBuilder()
                    .setCustomId('rp')
                    .setLabel('RP')
                    .setStyle('Success');

                const feedee = new ButtonBuilder()
                    .setCustomId('feedee')
                    .setLabel('Feedee')
                    .setStyle('Success');

                const feeder = new ButtonBuilder()
                    .setCustomId('feeder')
                    .setLabel('Feeder')
                    .setStyle('Success');
                
                const fatAdmirer = new ButtonBuilder()
                    .setCustomId('fatAdmirer')
                    .setLabel('Fat Admirer')
                    .setStyle('Success');

                const gaining = new ButtonBuilder()
                    .setCustomId('gaining')
                    .setLabel('Gaining')
                    .setStyle('Success');

                const row = new ActionRowBuilder()
                    .addComponents(rp, feedee, feeder, fatAdmirer, gaining);

                await interaction.reply({
                    content: 'Please press the button for the role that you would like.',
                    components: [row]
                })

            }
          };
            


    
 
