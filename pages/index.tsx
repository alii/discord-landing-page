import Head from "next/head";
import { GetStaticProps } from "next";
import { millify } from "millify";
import { DiscordClient, PartialGuild } from "../utils/DiscordClient";
import { Card } from "../components/Card";
import { config } from "../utils/config";
import { APIGuild } from "discord-api-types/v8";

type HomeProps = { guild: APIGuild | PartialGuild };

const client = new DiscordClient(config.bot_token);

export default function Home(props: HomeProps) {
  const memberCount = millify(props.guild.approximate_member_count!, {
    lowercase: true,
    precision: 1,
  });

  return (
    <div className="max-w-lg mx-auto mt-20 p-10 justify-center items-center">
      <Head>
        <title>{props.guild.name}</title>
      </Head>
      <div className="flex items-center justify-center mb-5 block">
        <img
          src={`https://cdn.discordapp.com/icons/${props.guild.id}/${props.guild.icon}.png?size=256`}
          height={75}
          width={75}
          loading="eager"
          className="rounded-full shadow-sm"
          alt={`Discord server icon of ${props.guild.name}`}
        />
      </div>
      <h2 className="text-center font-bold text-5xl">{props.guild.name}</h2>
      <div className="text-center mb-10 mt-2">
        <a
          href={config.guild_invite}
          className="bg-indigo-50 font-medium mt-5 text-indigo-600 px-4 py-1.5 rounded-full inline-block"
        >
          Join {memberCount} other members on Discord
        </a>
      </div>
      <h3
        className={
          "rounded-md mb-10 text-center p-2 bg-green-50 text-green-500"
        }
      >
        Hello World
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <Card
          href={config.guild_invite}
          description="Join the Discord"
          title="Discord"
        />
        <Card
          description="Watch My Twitch"
          title="Twitch"
          href="https://twitch.tv/twitch"
        />
        <Card
          description="Do something here"
          title="Another card"
          href="https://example.com"
        />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  console.log(config);
  const guild = await client.getGuild(config.guild_id || config.guild_invite);

  return {
    props: { guild },
    revalidate: 60 * 60,
  };
};
