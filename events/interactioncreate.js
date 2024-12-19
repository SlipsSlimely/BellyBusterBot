const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		} else if (interaction.isButton()) {
            const buttonID = interaction.customId;
            if (buttonID === 'rp') { //RP role
                //interaction.Reply({ content: 'Hi', ephemeral: true });
                const member = interaction.member; // get member from the interaction - person who clicked the button
                //const member = interaction.options.getUser('target');
      
                
                try {
                if (member.roles.cache.has('1305530078658302024')) { // if they already have the role
                    member.roles.remove('1305530078658302024'); // remove it
                    return interaction.deferReply({
                        content: 'Successfully removed role!',
                        ephemeral: true
                    });
                } else { // if they don't have the role
                    member.roles.add('1305530078658302024'); // add it
                    return interaction.deferReply({
                        content: 'Successfully added role!',
                        ephemeral: true
                    })
                }
                } catch (error) {
                    console.error(`Error adding RP role`);
                    console.error(error);
                }
            }
            else if (buttonID === 'feedee') { //Feedee role
              const member = interaction.member; // get member from the interaction - person who clicked the button
      
              
              try {
              if (member.roles.cache.has('1305559199740067870')) { // if they already have the role
                  member.roles.remove('1305559199740067870'); // remove it
                  return interaction.deferReply({
                      content: 'Successfully removed role!',
                      ephemeral: true
                  });
              } else { // if they don't have the role
                  member.roles.add('1305559199740067870'); // add it
                  return interaction.deferReply({
                      content: 'Successfully added role!',
                      ephemeral: true
                  })
              }
            } catch (error) {
                console.error(`Error adding feedee role`);
                console.error(error);
            }
          }
          else if (buttonID === 'feeder') { // Feeder Role
            const member = interaction.member; // get member from the interaction - person who clicked the button
      
            
            try {
            if (member.roles.cache.has('1305559360436699217')) { // if they already have the role
                member.roles.remove('1305559360436699217'); // remove it
                return interaction.deferReply({
                    content: 'Successfully removed role!',
                    ephemeral: true
                });
            } else { // if they don't have the role
                member.roles.add('1305559360436699217'); // add it
                return interaction.deferReply({
                    content: 'Successfully added role!',
                    ephemeral: true
                })
            }
        } catch (error) {
            console.error(`Error adding feeder role`);
            console.error(error);
        }
        }
        else if (buttonID === 'fatAdmirer') { // Fat admirer role
          const member = interaction.member; // get member from the interaction - person who clicked the button
      
          
            try{
          if (member.roles.cache.has('1305559453256519711')) { // if they already have the role
              member.roles.remove('1305559453256519711'); // remove it
              return interaction.deferReply({
                  content: 'Successfully removed role!',
                  ephemeral: true
              });
          } else { // if they don't have the role
              member.roles.add('1305559453256519711'); // add it
              return interaction.deferReply({
                  content: 'Successfully added role!',
                  ephemeral: true
              })
          }
        } catch (error) {
            console.error(`Error adding fatAdmirer role`);
            console.error(error);
        }
      }
      else if (buttonID === 'gaining') { // Gaining role
        const member = interaction.member; // get member from the interaction - person who clicked the button
      
        
      try{
        if (member.roles.cache.has('1305559570499768342')) { // if they already have the role
            member.roles.remove('1305559570499768342'); // remove it
            return interaction.deferReply({
                content: 'Successfully removed role!',
                ephemeral: true
            });
        } else { // if they don't have the role
            member.roles.add('1305559570499768342'); // add it
            return interaction.deferReply({
                content: 'Successfully added role!',
                ephemeral: true
            })
        }
    } catch (error) {
        console.error(`Error adding gaining role`);
        console.error(error);
    }
    }
      
      else if (buttonID === 'male') { // male role
        const member = interaction.member; // get member from the interaction - person who clicked the button
      
        
      try{
        if (member.roles.cache.has('1306079706084409384')) { // if they already have the role
            member.roles.remove('1306079706084409384'); // remove it
            return interaction.deferReply({
                content: 'Successfully removed role!',
                ephemeral: true
            });
        } else { // if they don't have the role
            member.roles.add('1306079706084409384'); // add it
            return interaction.deferReply({
                content: 'Successfully added role!',
                ephemeral: true
            })
        }
    } catch (error) {
        console.error(`Error adding male role`);
        console.error(error);
    }
    }
          
      else if (buttonID === 'female') { // female role
        const member = interaction.member; // get member from the interaction - person who clicked the button
      
        
      try{
        if (member.roles.cache.has('1306079795003654225')) { // if they already have the role
            member.roles.remove('1306079795003654225'); // remove it
            return interaction.deferReply({
                content: 'Successfully removed role!',
                ephemeral: true
            });
        } else { // if they don't have the role
            member.roles.add('1306079795003654225'); // add it
            return interaction.deferReply({
                content: 'Successfully added role!',
                ephemeral: true
            })
        }
    } catch (error) {
        console.error(`Error adding female role`);
        console.error(error);
    }
    }

else if (buttonID === 'furry') { // furry role
  const member = interaction.member; // get member from the interaction - person who clicked the button

  
try{
  if (member.roles.cache.has('1306079867086835893')) { // if they already have the role
      member.roles.remove('1306079867086835893'); // remove it
      return interaction.deferReply({
          content: 'Successfully removed role!',
          ephemeral: true
      });
  } else { // if they don't have the role
      member.roles.add('1306079867086835893'); // add it
      return interaction.deferReply({
          content: 'Successfully added role!',
          ephemeral: true
      })
  }
} catch (error) {
    console.error(`Error adding furry role`);
    console.error(error);
}
}
else if (buttonID === 'adult') { // adult role
    const member = interaction.member; // get member from the interaction - person who clicked the button
  
    
  try{
    if (member.roles.cache.has('1306761203434913852')) { // if they already have the role
        member.roles.remove('1306761203434913852'); // remove it
        return interaction.deferReply({
            content: 'Successfully removed role!',
            ephemeral: true
        });
    } else { // if they don't have the role
        member.roles.add('1306761203434913852'); // add it
        return interaction.deferReply({
            content: 'Successfully added role!',
            ephemeral: true
        })
    }
} catch (error) {
    console.error(`Error adding adult role`);
    console.error(error);
}
  }
}
}
};


