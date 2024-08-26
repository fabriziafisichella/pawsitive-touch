import { LocalePrefix } from "next-intl/routing";

export const locales = ["it", "en"] as const;

export const localePrefix = {
  mode: "always",
  prefixes: {
    "it": "/it",
    "en": "/en",
    // (/zh will be used as-is)
  },
} satisfies LocalePrefix<typeof locales>;
