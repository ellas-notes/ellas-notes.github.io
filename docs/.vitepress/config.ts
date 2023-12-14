import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: "Ella's Notes",
  description: 'Vite & Vue powered static site generator.',

  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-P9T79T362G' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-P9T79T362G');`
    ]
  ],

  themeConfig: {
    logo: { src: '/logo_29.png', width: 24, height: 24 },
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Privacy Policy', link: '/privacy' },
      { text: 'Google Play', link: 'https://play.google.com/store/apps/details?id=com.shimnssso.headonenglish' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Sheets 만들기', link: '/guide/google-sheet' },
          { text: 'Sheets 불러오기', link: '/guide/load-sheet' },
          { text: 'Sheets 공유하기', link: '/guide/share' },
          { text: '공개 Sheets', link: '/guide/template' },
          
          // ...
        ],
      },
      {
        text: 'Features',
        items: [
          { text: '미디어 재생', link: '/feature/media' },
          { text: '텍스트 강조', link: '/feature/highlight' },
          { text: '퀴즈', link: '/feature/quiz' },
          { text: '학습 이력', link: '/feature/history' },
          // ...
        ],
      },
    ],
    
    outline: { level: [2, 3], }
  },
});
