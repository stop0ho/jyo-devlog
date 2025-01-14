import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "jyo devlog",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://stop0ho.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/jyo-devlog/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stop0ho", // Usually your GitHub org/user name.
  projectName: "jyo-devlog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/stop0ho/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/stop0ho/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "jyo devlog",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/stop0ho/",
          html: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:top;" aria-label="GitHub">
        <path d="M12 .5C5.372.5 0 5.873 0 12.5c0 5.296 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.252c-3.338.726-4.037-1.61-4.037-1.61-.546-1.387-1.332-1.757-1.332-1.757-1.089-.744.082-.729.082-.729 1.204.085 1.837 1.236 1.837 1.236 1.07 1.836 2.807 1.306 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.943 0-1.312.468-2.384 1.236-3.223-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.523 11.523 0 013.006-.404c1.02.005 2.047.137 3.006.404 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.768.839 1.236 1.91 1.236 3.223 0 4.62-2.807 5.635-5.478 5.932.43.37.813 1.102.813 2.222v3.293c0 .32.193.694.8.577C20.564 22.3 24 17.797 24 12.5 24 5.873 18.627.5 12 .5z"/>
      </svg>
    `,
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © 2021 jyo. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.palenight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["jsx", "tsx", "css", "javascript", "typescript"],
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
