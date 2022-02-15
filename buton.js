const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'buton-rol',
  description: 'Buton Rol.', 
  options:  [],
  async execute(client, interaction) { 
    if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({content: 'Yapamazsın', ephemeral: true});
    const embed = new MessageEmbed()
    .setColor("#5555dd")
    .setURL("https://discord.gg/developers")
    .setFooter(`${interaction.guild.name} role menu!`)
    .setThumbnail(interaction.guild.iconURL())
    .setDescription('<:baloons:902576846502248509> **Discord Updates** (<#877594393345949758>) \n 🎉 **Events Announcement ** (<#877594340581576754>)  \n <:discordblurple:902577037011738635> **YouTube Subscriber** (<#877523354834305065>)');
    let btn = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Discord Updates")
    .setCustomId("roles1")
    .setEmoji('889965764688363621');
    let abone = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("YouTube Subscriber")
    .setCustomId("roles3")
    .setEmoji('889965765472710786');
    let btn1 = new MessageButton()
    .setStyle("PRIMARY")
    .setLabel("Events Ping")
    .setCustomId("roles2")
    .setEmoji('889965765028106300');
    const row = new MessageActionRow() 
    .addComponents([btn, btn1,abone]);
    interaction.reply({content: 'yes wtf.', ephemeral: true});
    interaction.channel.send({components: [row], embeds: [embed] });
  }
}
