import * as components from './components';

export default {
  //theme: '@vuefront/opencart-theme',
  organisms: {
    Header: components.oHeader,
  },
  image: {
    logo: {
      path: '',
    },
  },
  layouts: {
    '*': {
      headerMenu: [
        [
          'Menu',
          {
            items: ['store', 'blog'],
          },
        ],
      ],
      footerLeft: ['Pages'],
      footerCenter: ['AccountLinks'],
      footerRight: [
        [
          'ExtraLinks',
          {
            links: [
              {
                to: '/store/special',
                text: 'Special',
              },
              {
                to: '/store/compare',
                text: 'Compare',
              },
              {
                to: '/contact',
                text: 'Contact Us',
              },
            ],
          },
        ],
      ],
    },
    '/': {
      contentTop: [
        [
          'Slideshow',
          {
            items: [
              'https://res.cloudinary.com/bati1234/image/upload/c_lfill,h_500,w_1140/v1587807322/banner/1552_d1oaab.jpg',
              'https://res.cloudinary.com/bati1234/image/upload/c_lfill,h_500,w_1140/v1587807322/banner/2485027_kp108k.jpg',
              'https://res.cloudinary.com/bati1234/image/upload/c_lfill,h_500,w_1140/v1587807322/banner/11491_m94r8z.jpg',
            ],
          },
        ],
        [
          'FeaturedProduct',
          {
            ids: JSON.parse(process.env.FEATURED_PRODUCT),
          },
        ],
        'LatestProduct',
        'SpecialProduct',
        'LatestPost',
      ],
    },
    '/search/*': {
      contentBottom: ['SearchProduct', 'SearchPost'],
    },
    '/store/category*': {
      columnLeft: [
        'StoreCategory',
        [
          'LatestProduct',
          {
            column: true,
          },
        ],
      ],
    },
    '/blog/category*': {
      columnRight: [
        'Search',
        'BlogCategory',
        [
          'LatestPost',
          {
            column: true,
          },
        ],
      ],
    },
    '/store/product/*': {
      contentBottom: ['RelatedProduct'],
    },
    '/blog/post*': {
      columnRight: [
        [
          'LatestPost',
          {
            column: true,
          },
        ],
      ],
    },
    '/account*': {
      columnRight: ['Account'],
    },
    '/store/checkout': {
      contentTop: ['Checkout'],
    },
  },
};
