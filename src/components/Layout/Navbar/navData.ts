export const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    children: [
      { title: 'About Us', path: '/about' },
      { title: 'FAQ', path: '/faq' },
    ],
  },
  {
    title: 'Web Design',
    path: '/web-design',
  },
  {
    title: 'Top Locations',
    children: [
      {
        title: 'Pittsburgh',
        children: [
          { title: 'Allison Park', path: '/pittsburgh/allison-park' },
          { title: 'Bellevue', path: '/pittsburgh/bellevue' },
          { title: 'Cranberry', path: '/pittsburgh/cranberry' },
          { title: 'Fox Chapel', path: '/pittsburgh/fox-chapel' },
          { title: 'Gibsonia', path: '/pittsburgh/gibsonia' },
          { title: 'Mars', path: '/pittsburgh/mars' },
          { title: 'Monroeville', path: '/pittsburgh/monroeville' },
          { title: 'Oakmont', path: '/pittsburgh/oakmont' },
          { title: 'Pittsburgh', path: '/pittsburgh/pittsburgh' },
          { title: 'Wexford', path: '/pittsburgh/wexford' },
        ],
      },
      {
        title: 'Butler',
        path: '/butler',
      },
      {
        title: 'Kittanning',
        path: '/kittanning',
      },
    ],
  },
  {
    title: 'Pricing',
    path: '/pricing',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]
