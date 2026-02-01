import { defineConfig } from "astro/config";

const site = "https://YOUR_GH_USER.github.io";
const base = "/YOUR_REPO"; // si publicas en repo (no user page). Para user page, pon "".

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
});
