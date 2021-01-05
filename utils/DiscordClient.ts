import fetch from "node-fetch";
import { APIGuild, APIPartialGuild } from 'discord-api-types/v8';

export interface PartialGuild extends APIPartialGuild {
  approximate_member_count: number;
  approximate_presence_count: number;
}
export class DiscordClient {
  constructor(
    private readonly token?: string,
    private readonly api_base = "https://discord.com/api/v8"
  ) {}

  async getGuild(idOrInvite: string): Promise<APIGuild | PartialGuild> {
    console.log(idOrInvite);

    if (this.token) {
      return fetch(`${this.api_base}/guilds/${idOrInvite}?with_counts=true`, {
        headers: { Authorization: `Bot ${this.token}` },
      }).then((res) => res.json());
    }
    
    const [, code] = idOrInvite.match(/discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/([\w-]{2,255})/i) ?? [null, null];
    return fetch(`${this.api_base}/invites/${code}?with_counts=true`)
      .then((res) => res.json())
      .then((invite) => {
        const guild = invite.guild! as PartialGuild;
        guild.approximate_member_count = invite.approximate_member_count;
        guild.approximate_member_count = invite.approximate_member_count;

        return guild;
      });
  }
}
