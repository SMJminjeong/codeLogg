const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'code logg',
  tagline: 'Dinosaurs are cool',
  url: 'https://SMJminjeong.github.io',
  baseUrl: '/codeLogg/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SMJminjeong', // Usually your GitHub org/user name.
  projectName: 'codeLogg', // Usually your repo name.

  customFields: {
    i18n: {
      defaultLocale: 'ko',
      locales: ['ko', 'en'],
      localeConfigs: {
        ko: {
          htmlLang: 'ko-KR',
        },
        en: {
          htmlLang: 'en-US',
        },
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: "/tags", label: "Tags", position: "left" },
          {to: '/blog', label: 'Blog', position: 'left'},
          { to: "/archive", label: "Archive", position: "left" },
          {
            href: 'https://github.com/SMJminjeong',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} codeLogg, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
