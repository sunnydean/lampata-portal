import fs from "fs";
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import {
  buildLlmsFullTxt,
  buildLlmsTxt,
  buildRobotsTxt,
  buildSitemapXml,
  getPageByKey,
  getSiteUrl,
  renderSeoHead,
  renderSnapshot,
  resolvePageKey,
} from "./seo.config";

function copyDirectory(sourceDir: string, destinationDir: string) {
  if (!fs.existsSync(sourceDir)) {
    return false;
  }

  fs.mkdirSync(destinationDir, { recursive: true });

  fs.cpSync(sourceDir, destinationDir, {
    recursive: true,
    force: true,
    filter: (sourcePath) => !sourcePath.includes(`${path.sep}.git`) && !sourcePath.includes(`${path.sep}.github`),
  });

  return true;
}

function normalizeBasePath(basePath?: string) {
  if (!basePath || basePath === "/") {
    return "/";
  }

  const trimmed = basePath.replace(/^\/+|\/+$/g, "");
  return `/${trimmed}/`;
}

function getBuildBasePath(siteUrl?: string) {
  const explicitBasePath = process.env.VITE_BASE_PATH || process.env.BASE_PATH;

  if (explicitBasePath) {
    return normalizeBasePath(explicitBasePath);
  }

  if (process.env.GITHUB_PAGES === "true") {
    const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
    const owner = process.env.GITHUB_REPOSITORY_OWNER;
    const siteHostname = siteUrl ? new URL(siteUrl).hostname : null;
    const githubPagesHostname = owner ? `${owner}.github.io` : null;

    if (siteHostname && githubPagesHostname && siteHostname !== githubPagesHostname) {
      return "/";
    }

    if (repository && owner && repository !== `${owner}.github.io`) {
      return `/${repository}/`;
    }
  }

  return "/";
}

export default defineConfig(() => {
  const siteUrl = getSiteUrl(process.env.VITE_SITE_URL || process.env.SITE_URL);
  const basePath = getBuildBasePath(siteUrl);
  const seoContext = {
    siteUrl,
    basePath,
    buildDate: new Date().toISOString().slice(0, 10),
  };

  return {
    base: basePath,
    plugins: [
      // The React and Tailwind plugins are both required for Make, even if
      // Tailwind is not being actively used – do not remove them
      react(),
      tailwindcss(),
      {
        name: "lampata-seo",
        transformIndexHtml(html, ctx) {
          const pageKey = resolvePageKey(
            ctx.filename,
            "path" in ctx ? ctx.path : undefined,
          );
          const page = pageKey ? getPageByKey(pageKey) : undefined;
          const faviconHref =
            basePath === "/" ? "/lampatageospatial_logo.jpeg" : `${basePath}lampatageospatial_logo.jpeg`;

          if (!page) {
            return html;
          }

          let transformedHtml = html.replace(/<html lang="[^"]*">/i, '<html lang="en-GB">');
          const titleTag = `<title>${page.title}</title>`;

          transformedHtml = /<title>.*?<\/title>/is.test(transformedHtml)
            ? transformedHtml.replace(/<title>.*?<\/title>/is, titleTag)
            : transformedHtml.replace("</head>", `  ${titleTag}\n</head>`);

          if (/<link[^>]+rel="icon"[^>]*>/i.test(transformedHtml)) {
            transformedHtml = transformedHtml.replace(
              /<link([^>]+rel="icon"[^>]+href=")([^"]+)("[^>]*?)\/?>/i,
              `<link$1${faviconHref}$3 />`,
            );
          } else {
            transformedHtml = transformedHtml.replace(
              "</head>",
              `  <link rel="icon" type="image/jpeg" href="${faviconHref}" />\n</head>`,
            );
          }

          transformedHtml = transformedHtml.replace(
            "</head>",
            `  ${renderSeoHead(page, seoContext)}\n</head>`,
          );

          const snapshotMarkup = renderSnapshot(page, basePath);
          transformedHtml = transformedHtml.replace(
            /<div id="root">\s*<\/div>/i,
            `<div id="root">\n${snapshotMarkup}\n      </div>`,
          );

          return transformedHtml;
        },
        closeBundle() {
          const distDir = path.resolve(__dirname, "dist");

          fs.writeFileSync(path.join(distDir, "robots.txt"), buildRobotsTxt(seoContext));
          fs.writeFileSync(path.join(distDir, "sitemap.xml"), buildSitemapXml(seoContext));
          fs.writeFileSync(path.join(distDir, "llms.txt"), buildLlmsTxt(seoContext));
          fs.writeFileSync(path.join(distDir, "llms-full.txt"), buildLlmsFullTxt(seoContext));
        },
      },
      {
        name: "copy-space-tech-radar",
        closeBundle() {
          const sourceDir = path.resolve(__dirname, "space-tech-radar");
          const destinationDir = path.resolve(__dirname, "dist/space-tech-radar");

          const copied = copyDirectory(sourceDir, destinationDir);

          if (!copied) {
            console.warn(
              `[copy-space-tech-radar] Skipping optional radar bundle because "${sourceDir}" was not found.`,
            );
          }
        },
      },
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html"),
          cookiePolicy: path.resolve(__dirname, "cookie-policy/index.html"),
          privacy: path.resolve(__dirname, "privacypolicy/index.html"),
          radar: path.resolve(__dirname, "earth-observation-tech-radar/index.html"),
          training: path.resolve(__dirname, "training/index.html"),
        },
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ["**/*.svg", "**/*.csv"],
  };
});
