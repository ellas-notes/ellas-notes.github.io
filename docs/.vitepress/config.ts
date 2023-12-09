import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: "Ella's Notes",
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
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
          { text: '공개 Sheets', link: '/guide/template' },
          { text: 'Google Sheets 양식', link: '/guide/google-sheet' },
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
      {
        // text: 'Etc',
        items: [
          { text: '개인정보 처리방침', link: '/privacy' },
          // ...
        ],
      },
    ],
  },
});
