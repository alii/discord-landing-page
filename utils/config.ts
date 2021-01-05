export interface Config {
  guild_id?: string;
  guild_invite: string;
  bot_token?: string;
}

export const config: Config = {
  guild_id: process.env.GUILD ?? "",
  bot_token: process.env.TOKEN ?? "",
  guild_invite: process.env.INVITE ?? "https://discord.gg/12345",
};
