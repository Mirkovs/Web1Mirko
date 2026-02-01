import { defineConfig } from "astro/config";

const site = "https://mirkosas.github.io";
const base = "/Web1Mirko/"; // si publicas en repo (no user page). Para user page, pon "".

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
});
