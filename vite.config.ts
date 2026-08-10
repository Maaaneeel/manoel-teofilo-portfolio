import vinext from "vinext";
import { defineConfig } from "vite";
import { copyDrizzleMigrations } from "./build/sites-vite-plugin";

const LOCAL_DATABASE_ID = "00000000-0000-4000-8000-000000000000";
const d1Binding = process.env.D1_BINDING;
const r2Binding = process.env.R2_BINDING;

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

const localBindingConfig = {
  main: "./worker/index.ts",
  compatibility_flags: ["nodejs_compat"],
  d1_databases: d1Binding
    ? [
        {
          binding: d1Binding,
          database_name: "portfolio-local",
          database_id: LOCAL_DATABASE_ID,
        },
      ]
    : [],
  r2_buckets: r2Binding
    ? [
        {
          binding: r2Binding,
          bucket_name: "portfolio-local",
        },
      ]
    : [],
};

export default defineConfig(async () => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    server: isCodexSeatbeltSandbox
      ? { watch: { useFsEvents: false, usePolling: true } }
      : undefined,
    plugins: [
      vinext(),
      copyDrizzleMigrations(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: localBindingConfig,
      }),
    ],
  };
});
