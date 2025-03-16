/// <reference types="astro/client" />
import type { DirectoryRuntime } from "@astrojs/cloudflare"

declare namespace App {
  interface Locals extends DirectoryRuntime {
    runtime: {
      env: {
        TELEGRAM_BOT_TOKEN: string;
        TELEGRAM_CHAT_ID: string;
      };
    };
  }
}