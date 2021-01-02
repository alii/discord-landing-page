export namespace Discord {
  export interface Guild {
    id: string;
    name: string;
    icon: string;
    description?: string;
    splash: string;
    discovery_splash?: string;
    approximate_member_count: number;
    approximate_presence_count: number;
    features: string[];
    emojis: Emoji[];
    banner: string;
    owner_id: string;
    application_id?: string;
    region: string;
    afk_channel_id?: string;
    afk_timeout: number;
    system_channel_id?: string;
    widget_enabled: boolean;
    widget_channel_id: string;
    verification_level: number;
    roles: Role[];
    default_message_notifications: number;
    mfa_level: number;
    explicit_content_filter: number;
    max_presences?: number;
    max_members: number;
    max_video_channel_users: number;
    vanity_url_code: string;
    premium_tier: number;
    premium_subscription_count: number;
    system_channel_flags: number;
    preferred_locale: string;
    rules_channel_id?: string;
    public_updates_channel_id?: string;
  }

  export interface Emoji {
    name: string;
    roles: Role[];
    id: string;
    require_colons: boolean;
    managed: boolean;
    animated: boolean;
    available: boolean;
  }

  export interface Role {
    id: string;
    name: string;
    permissions: string;
    position: number;
    color: number;
    hoist: boolean;
    managed: boolean;
    mentionable: boolean;
  }
}
