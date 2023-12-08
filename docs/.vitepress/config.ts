import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: "Ella's Notes",
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/index' },

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
        // text: 'Guide',
        items: [
          { text: 'Guide', link: '/guide/index' },
          // ...
        ],
      },
    ],
  },
});
