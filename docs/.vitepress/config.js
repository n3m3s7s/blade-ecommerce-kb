export default {
    title: 'Blade docs',
    description: 'Official Blade documentation.',
    head: [
      ['link', {rel: 'icon', href: 'https://bluespirit.collaudo.biz/images/5/24/24/media/images/all/kb/blade@2x.png'}],
      ['meta', {'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate'}],
      ['meta', {'http-equiv': 'pragma', content: 'no-cache'}],
      ['meta', {'http-equiv': 'expires', content: '0'}],
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
              { text: 'Home', link: '/' },
              { text: 'Getting started', link: '/getting-started' },
              { text: 'Changelog', link: '/changelog' }
            ]
          },
          {
            text: 'Frontend - Cart/checkout',
            items: [
              { text: 'CC API - Introduction', link: '/frontend/cart-checkout/' },
              { text: 'How it works', link: '/frontend/cart-checkout/how-it-works.md' },
              { text: 'Context and event labels', link: '/frontend/cart-checkout/context-event.md' },
              { text: 'Branch "attributes"', link: '/frontend/cart-checkout/attributes.md' },
              { text: 'Branch "products"', link: '/frontend/cart-checkout/products.md' },
              { text: 'Branch "carrier"', link: '/frontend/cart-checkout/carrier.md' },
              { text: 'Branch "payment"', link: '/frontend/cart-checkout/payment.md' },
              { text: 'Branch "delivery"', link: '/frontend/cart-checkout/delivery.md' },
              { text: 'Branch "billing"', link: '/frontend/cart-checkout/billing.md' },
              { text: 'Branch "user"', link: '/frontend/cart-checkout/user.md' },
              { text: 'Branch "engagements"', link: '/frontend/cart-checkout/engagements.md' },
            ]
          },
          {
            text: 'Frontend - Order confirm',
            items: [
              { text: 'OC API - Introduction', link: '/frontend/order-confirm/' },
              { text: 'How it works', link: '/frontend/order-confirm/how-it-works.md' },
              { text: 'Branch "attributes"', link: '/frontend/order-confirm/attributes.md' },
              { text: 'Branch "products"', link: '/frontend/order-confirm/products.md' },
              { text: 'Branch "carrier"', link: '/frontend/order-confirm/carrier.md' },
              { text: 'Branch "payment"', link: '/frontend/order-confirm/payment.md' },
              { text: 'Branch "delivery"', link: '/frontend/order-confirm/delivery.md' },
              { text: 'Branch "billing"', link: '/frontend/order-confirm/billing.md' },
              { text: 'Branch "user"', link: '/frontend/order-confirm/user.md' },
              { text: 'Branch "engagements"', link: '/frontend/order-confirm/engagements.md' },
            ]
          },
          {
            text: 'Frontend - General events',
            items: [
              { text: 'Events - Introduction', link: '/frontend/bus-events/' },
              { text: 'How it works', link: '/frontend/bus-events/how-it-works.md' },              
              { text: 'Scope "products"', link: '/frontend/bus-events/products.md' },
              { text: 'Scope "wishlists"', link: '/frontend/bus-events/wishlists.md' },
              { text: 'Scope "users"', link: '/frontend/bus-events/users.md' },
              { text: 'Scope "promotions"', link: '/frontend/bus-events/promotions.md' },
              { text: 'Scope "algolia"', link: '/frontend/bus-events/algolia.md' },
            ]
          },
          {
            text: 'Backend - i18n UI',
            items: [
              { text: 'Introduction', link: '/backend/i18n/' },
              { text: 'Web App - Account', link: '/backend/i18n/app-account.md' },
              { text: 'Web App - Usage', link: '/backend/i18n/app-usage.md' },
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