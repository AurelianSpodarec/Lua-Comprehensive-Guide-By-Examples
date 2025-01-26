import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const googleAnalyticsTrackingID = process.env.GOOGLE_ANALYTICS_ID;

const config: Config = {
  title: 'lua Docs',
  tagline: 'Modern Documentation for lua',
  favicon: 'img/favicon.ico',
  url: 'https://luadocs.com',
  baseUrl: '/',
  organizationName: 'aurelianspodarec',
  projectName: 'luadocs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          if (route.path === '/') {
            route.redirect = '/docs/preface/introduction';
          }
          redirects.push({
            from: '/',
            to: '/docs/preface/introduction',
            status: 301,
          });
        },
      };
    },
    ...(googleAnalyticsTrackingID ? [
      [
        '@docusaurus/plugin-google-analytics',
        {
          trackingID: googleAnalyticsTrackingID,
        },
      ]
    ] : []),
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:'https://github.com/aurelianspodarec/luadocs/tree/main/',
          lastVersion: 'current',
          versions: {
            current: {
              label: '5.4.0',
              path: '',
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/aurelianspodarec/luadocs/tree/main/',
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
    metadata: [
      {
        name: "google-fonts",
        content: "https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap",
      },
    ],
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'lua',
      logo: {
        alt: 'lua Logo',
        src: 'https://imgs.search.brave.com/KjiSEUxgHxkAad5nl7RNig3cqV4MRpGJ9hUeufy-p1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2NmL0x1/YS1Mb2dvLnN2Zy82/NDBweC1MdWEtTG9n/by5zdmcucG5n',
      },
      items: [
        { 
          type: "docsVersionDropdown", 
          position: "left",
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Docs',
          href: "/docs/preface/introduction",
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://discord.gg/Jp2HFx3KTH',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-discord',
          'aria-label': 'Discord',
          target: '_blank',
        },
        {
          href: 'https://github.com/AurelianSpodarec/luaDocs',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-github',
          'aria-label': 'GitHub repository',
          target: '_blank',
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
    //           href: 'https://github.com/AurelianSpodarec/luaDocs',
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
