import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
   preview: {
    port: 3000,
    host: true,
    allowedHosts: [
      'prodexa-ai.onrender.com', // Add your Render frontend domain
      'localhost',
    ],
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
