import fetch from "node-fetch";
import { Discord as Types } from "./types";

export class DiscordClient {
  constructor(
    private readonly token: string,
    private readonly api_base = "https://discord.com/api"
  ) {}

  getGuild(id: string): Promise<Types.Guild> {
    return fetch(`${this.api_base}/guilds/${id}?with_counts=true`, {
      headers: { Authorization: `Bot ${this.token}` },
    }).then((res) => res.json());
  }
}
