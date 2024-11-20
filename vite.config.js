import { defineConfig } from "vite";

export default defineConfig({
  base: "/react-tictac/", // Ensure this matches your repo name
  build: {
    assetsDir: "assets", // Ensure assets go to 'assets/'
  },
});
