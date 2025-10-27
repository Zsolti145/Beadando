import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function copySuccessHtml() {
  return {
    name: "copy-success-html",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexFile = path.join(distDir, "index.html");
      const successCandidates = ["success.html", "Success.html"].map((name) =>
        path.join(distDir, name),
      );
      const successFile = successCandidates.find((file) => fs.existsSync(file));

      if (fs.existsSync(indexFile) && successFile) {
        const indexHtml = fs.readFileSync(indexFile, "utf-8");
        let successHtml = fs.readFileSync(successFile, "utf-8");

        // Kivágjuk az index.html head részét
        const headMatch = indexHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
        if (headMatch && headMatch[1]) {
          const newHead = `<head>${headMatch[1]}</head>`;
          successHtml = successHtml.replace(/<head[^>]*>[\s\S]*?<\/head>/i, newHead);
          fs.writeFileSync(successFile, successHtml);
          console.log("✅ success.html HEAD frissítve az index.html alapján!");
        } else {
          console.warn("⚠️ Nem talált head blokkot az index.html-ben.");
        }
      } else {
        console.warn("⚠️ Nem található index.html vagy success.html a dist mappában.");
      }
    },
  };
}
