import { defineConfig } from "astro/config";

const site = "https://mirkosas.github.io";
const base = "/Plantilla1Mirkosas/"; // si publicas en repo (no user page). Para user page, pon "".

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
});
