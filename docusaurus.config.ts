import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Lua Docs',
  tagline: 'Modern Documentation for Lua',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://luadocs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aurelianspodarec', // Usually your GitHub org/user name.
  projectName: 'luadocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    function () {
      return {
        name: 'docusaurus-plugin-redirect',
        async onPreBuild({ redirects, route }) {
          // Redirect from the root to /docs/preface/
          if (route.path === '/') {
            // Redirect to /docs/preface/
            route.redirect = '/docs/preface/introduction';
          }
          redirects.push({
            from: '/',
            to: '/docs/preface/introduction',
            status: 301, // Permanent redirect
          });
        },
      };
    },
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: process.env.NEXT_GOOGLE_ANALYTICS_ID,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aurelianspodarec/luadocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aurelianspodarec/luadocs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/styles.scss'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Lua',
      logo: {
        alt: 'Lua Logo',
        src: 'https://imgs.search.brave.com/KjiSEUxgHxkAad5nl7RNig3cqV4MRpGJ9hUeufy-p1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2NmL0x1/YS1Mb2dvLnN2Zy82/NDBweC1MdWEtTG9n/by5zdmcucG5n',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
          href: "/docs/preface/introduction",
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/AurelianSpodarec/LuaDocs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/Jp2HFx3KTH',
          label: 'Discord',
          position: 'right'
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'X',
    //           href: 'https://x.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/AurelianSpodarec/LuaDocs',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['lua'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
