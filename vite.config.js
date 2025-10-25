import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";
import { copyFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import copySuccessHtml from "./vite-plugin-copy-success.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    copySuccessHtml(),{

   name: 'copy-redirects',
      closeBundle() {
        copyFileSync(resolve(__dirname, 'public/_redirects'), resolve(__dirname, 'dist/_redirects'));
    },
  },
  ],
})
