import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
=======

>>>>>>> f7ad076 (Fix GitHub Pages deploy)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ IMPORTANT for GitHub Pages
  base: "/My-Portfolio-main/",
}));
