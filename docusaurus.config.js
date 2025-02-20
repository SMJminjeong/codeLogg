const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Welcome to Code Logg',
  tagline: '',
  url: 'https://SMJminjeong.com',
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
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
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
        title: "CodeLogg",
        logo: {
          alt: 'My Site Logo',
          src: 'img/test.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'TIL',
            position: 'left'
          },
          // {
          //   to: '/secondBlog',
          //   type: 'blog',
          //   label: 'test',
          //   position: 'left'
          // },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Blog',
          },
          {
            to: '/docs/Project',
            label: '프로젝트 정리',
            position: 'left',
          },
          {
            href: 'https://code-logg.tistory.com/',
            label: 'Tistory',
            position: 'left',
          },
          {
            href: 'https://github.com/SMJminjeong',
            label: 'GitHub',
            position: 'left',
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
      announcementBar: {
        id: 'support_us',
        content:
            'my another blog in <a target="_blank" rel="noopener noreferrer" href="https://code-logg.tistory.com/">tistory</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),

});
