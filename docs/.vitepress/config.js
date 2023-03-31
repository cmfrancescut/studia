import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Studia",
  description: "A Vue component library themed using TailwindCSS.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmfrancescut' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'About', link: '/' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
          { text: 'Button', link: '/components/button' },
          { text: 'Card', link: '/components/card' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Dropdown', link: '/components/dropdown' },
          { text: 'Number input', link: '/components/number-input' },
          { text: 'Pagination', link: '/components/pagination' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Radio group', link: '/components/radio-group' },
          { text: 'Skeletons', link: '/components/skeletons' },
          { text: 'Table', link: '/components/table' },
          { text: 'Text input', link: '/components/text-input' }
        ]
      },
      {
        text: 'Layout & Theme',
        items: [
          { text: 'Columns', link: '/layout/columns' },
          { text: 'Menu', link: '/layout/menu' },
          { text: 'Sidebar', link: '/layout/sidebar' },
          { text: 'Colours', link: 'theme/colours' }
        ]
      }
    ],
  }
})
