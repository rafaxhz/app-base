import { ChatInputCommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export abstract class Ping {
  @Slash({
    name: "ping",
    description: "Return with Client Ping!",
    dmPermission: true,
  })
  async Handler(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply({ flags: ["Ephemeral"] });

    await interaction.editReply({
      embeds: [
        {
          description: `${interaction.client.ws.ping}ms!`,
          color: 0x2b2d31,
        },
      ],
    });
  }
}
