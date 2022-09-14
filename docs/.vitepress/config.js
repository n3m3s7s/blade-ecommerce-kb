export default {
    title: 'Blade docs',
    description: 'Official Blade documentation.',
    head: [
      ['link', {rel: 'icon', href: 'https://bluespirit.collaudo.biz/images/5/24/24/media/images/all/kb/blade@2x.png'}],
    ],
    themeConfig: {
        logo: 'https://bluespirit.collaudo.biz/images/5/24/24/media/images/all/kb/blade@2x.png',
        nav: [
          { text: 'Getting started', link: '/getting-started' },
          { text: 'Postman', link: 'https://documenter.getpostman.com/view/7952821/S1a4YSxQ' },
          { text: 'Changelog', link: '/changelog' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Introduction', link: '/' },
              { text: 'Getting started', link: '/getting-started' },
              { text: 'Changelog', link: '/changelog' }
            ]
          },
          {
            text: 'Frontend - Cart/checkout',
            items: [
              { text: 'Introduction', link: '/frontend/cart-checkout/' },
              { text: 'How it works', link: '/frontend/cart-checkout/how-it-works.md' },
            ]
          },
          {
            text: 'Frontend - Landing pages',
            items: [
              { text: 'Introduction', link: '/frontend/landing/' },
              { text: 'Static injection', link: '/frontend/landing/static.md' },
              { text: 'Vercel injection', link: '/frontend/landing/vercel.md' },
            ]
          }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2014-present / Developed by Icoa S.r.l. / Maintainer: Fabio Politi (f.politi@icoa.it)'
        }
      }
  }