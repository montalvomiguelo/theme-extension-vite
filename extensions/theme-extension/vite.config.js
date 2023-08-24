import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import preact from "@preact/preset-vite";
import fullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [
    shopify(),
    preact(),
    fullReload("tmp/extension.update", { root: "/" }),
  ],
});
