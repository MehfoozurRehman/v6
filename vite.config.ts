import { VitePWA } from "vite-plugin-pwa"; // Adds PWA support to the project
import { ViteWebfontDownload } from "vite-plugin-webfont-dl"; // Downloads webfonts at build time
import { chunkSplitPlugin } from "vite-plugin-chunk-split"; // Splits code into smaller chunks for faster loading
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Provides support for React framework
import viteCompression from "vite-plugin-compression"; // Compresses assets for faster loading
import viteImagemin from "vite-plugin-imagemin"; // Minifies images to reduce file size

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
    }),
    ViteWebfontDownload(),
    chunkSplitPlugin(),
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 100,
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      webp: {
        quality: 70,
      },
      svgo: {
        multipass: true,
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "minifyStyles",
          },
          {
            name: "removeMetadata",
          },
          {
            name: "removeUselessStrokeAndFill",
          },
          {
            name: "reusePaths",
          },
          {
            name: "removeEmptyAttrs",
            active: true,
          },
        ],
      },
    }),
  ],
});
