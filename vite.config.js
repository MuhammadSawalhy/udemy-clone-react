import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";

export default ({ mode }) => {
  return defineConfig({
    plugins: [react(), ViteAliases()],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
  });
};
