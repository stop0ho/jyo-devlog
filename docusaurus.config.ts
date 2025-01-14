import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "jyo devlog",
  tagline: "프론트엔드 개발과 여러 경험을 기록하고 있습니다.",
  favicon: "img/favicon.ico",
  url: "https://stop0ho.github.io",
  baseUrl: "/jyo-devlog/",

  organizationName: "stop0ho",
  projectName: "jyo-devlog",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/stop0ho/",
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
    image: "img/logo.png",
    navbar: {
      title: "jyo devlog",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "개발",
        },
        {
          to: "/blog",
          label: "기록",
          position: "left",
        },
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
      copyright: `Copyright © 2021 jyo. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
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
