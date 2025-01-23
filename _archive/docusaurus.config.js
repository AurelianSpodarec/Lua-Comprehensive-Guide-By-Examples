// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lua Documentation',
  tagline: 'Lua Docs',
  url: 'https://luavel.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AurelianSpodarec',
  projectName: 'lua-documentation',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/AurelianSpodarec/lua-documentation',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Lua Docs',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/luavel_logo.png',
        },
        items: [
          {
            label: 'References',
            to: '/',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            label: 'Guides',
            to: '/',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            href: 'https://github.com/AurelianSpodarec/lua-documentation',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/Jp2HFx3KTH',
            label: 'Discord',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/lua-documentation',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/lua-documentation',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/lua-documentation',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua']
      }
    }),
};

module.exports = config;
