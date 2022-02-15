## MAİNE GİDECEK


client.on('interactionCreate', async (i) => {
  if (!i.isButton()) return;
  if (i.customId == "roles1") {
    const role = "1 ROL İD";
    if (!i.member.roles.cache.has(role)) {
      i.member.roles.add(role);
      return i.reply({ content: 'Role added.', ephemeral: true });
    } else {
      i.member.roles.remove(role);
      return i.reply({ content: 'Role remove.', ephemeral: true });
    }
  } else if (i.customId == "roles2") {
    const role = "2 ROL İD"; 
    if (!i.member.roles.cache.has(role)) {
      i.member.roles.add(role);
      return i.reply({ content: 'Role updated.', ephemeral: true });
    } else {
      i.member.roles.remove(role);
      return i.reply({ content: 'Role remove.', ephemeral: true });
    }
      } else if (i.customId == "roles3") {
      return i.reply({ content: '<:youtube:878262262136180766> <#877594465899003925> kanalına göz at. discord.gg/developers', ephemeral: true });
    
  }
});
