module.exports = (options, ctx) => ({
  extend: '@vuepress/theme-default',
  plugins: [
    '@vuepress/nprogress',
    '@vuepress/back-to-top',
    'smooth-scroll',
    // 'table-of-contents',
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    /* ['zooming', {
      selector: '.zoom-img',
      delay: 300,
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }], */
    /* ['@vuepress/plugin-blog', {
      frontmatters: [{
        id: 'home',
        keys: ['home'],
        path: '/',
        layout: 'HomeLayout',
      }, {
        id: 'tags',
        keys: ['tag', 'tags'],
        path: '/tags/',
        layout: 'TagsLayout',
      }, {
        id: 'categories',
        keys: ['category', 'categories'],
        path: '/categories/',
        layout: 'CategoriesLayout',
      }, {
        id: 'archives',
        keys: ['archive', 'archives'],
        path: '/archives/',
        layout: 'ArchivesLayout',
      },]
    }], */
    ['container', {
      type: 'theorem',
      before: info => `<div class="custom-block theorem"><p class="custom-block-title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'right',
      defaultTitle: '',
    }],
  ],
})
