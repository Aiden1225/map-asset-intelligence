import { IronSessionOptions } from "iron-session";

export interface SessionData {
  address?: string;
  chainId?: number;
  nonce?: string;
}

export const sessionOptions: IronSessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD || "complex_password_at_least_32_characters_long",
  cookieName: "maic_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};