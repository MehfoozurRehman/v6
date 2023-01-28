import { VitePWA } from "vite-plugin-pwa";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            handler: "NetworkOnly",
            urlPattern: /\/api\/.*\/*.json/,
            method: "POST",
            options: {
              backgroundSync: {
                name: "myQueueName",
                options: {
                  maxRetentionTime: 24 * 60,
                },
              },
            },
          },
        ],
      },
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
