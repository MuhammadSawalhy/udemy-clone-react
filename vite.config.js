import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";

export default ({ mode }) => {
  return defineConfig({
    base: '',
    plugins: [react(), ViteAliases({ useConfig: true })],
  });
};
