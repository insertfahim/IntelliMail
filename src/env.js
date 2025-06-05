import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    OPENAI_API_KEY: z.string(),
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_PRICE_ID: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
    AURINKO_CLIENT_ID: z.string(),
    AURINKO_CLIENT_SECRET: z.string(),
    AURINKO_SIGNING_SECRET: z.string(),
    NYLAS_CLIENT_ID: z.string(),
    NYLAS_API_KEY: z.string(),
    GRAVATAR_API_KEY: z.string().optional(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_URL: z.string().url(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_PRICE_ID: process.env.STRIPE_PRICE_ID,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    AURINKO_CLIENT_ID: process.env.AURINKO_CLIENT_ID,
    AURINKO_CLIENT_SECRET: process.env.AURINKO_CLIENT_SECRET,
    AURINKO_SIGNING_SECRET: process.env.AURINKO_SIGNING_SECRET,
    NYLAS_CLIENT_ID: process.env.NYLAS_CLIENT_ID,
    NYLAS_API_KEY: process.env.NYLAS_API_KEY,
    GRAVATAR_API_KEY: process.env.GRAVATAR_API_KEY,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
