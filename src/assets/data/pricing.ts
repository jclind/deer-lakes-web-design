import { BsCircleSquare, BsStar, BsXDiamond } from 'react-icons/bs'

export const pricing = [
  {
    icon: BsCircleSquare,
    title: 'Lump Sum',
    price: '$3200',
    priceSubHeader: '+25/mo hosting',
    theme: 'secondary',
    features: [
      {
        isIncluded: true,
        feature: 'Development & Design',
      },
      {
        isIncluded: true,
        feature: '5 Pages Included ($100/additional)',
      },
      {
        isIncluded: true,
        feature: '$25/mo Hosting',
      },
      {
        isIncluded: true,
        feature: '+$50/mo Unlimited Edits',
      },
      {
        isIncluded: false,
        feature: 'Priority Support',
      },
      {
        isIncluded: false,
        feature: 'Lifetime Updates',
      },
    ],
    callToAction: 'Get Started',
  },
  {
    icon: BsStar,
    title: 'Monthly',
    price: '$150/mo',
    priceSubHeader: 'Per Month',
    theme: 'primary',
    features: [
      {
        isIncluded: true,
        feature: 'Development & Design',
      },
      {
        isIncluded: true,
        feature: '5 Pages Included ($100/additional)',
      },
      {
        isIncluded: true,
        feature: 'Hosting Included',
      },
      {
        isIncluded: true,
        feature: 'Unlimited Edits',
      },
      {
        isIncluded: true,
        feature: 'Priority Support',
      },
      {
        isIncluded: true,
        feature: 'Lifetime Updates',
      },
    ],
    callToAction: 'Get Started',
  },
  {
    icon: BsXDiamond,
    title: 'Custom',
    price: 'Custom',
    priceSubHeader: '',
    theme: 'secondary',
    features: [
      {
        isIncluded: true,
        feature: 'Tailored Design & Development',
      },
      {
        isIncluded: true,
        feature: 'Unlimited Pages',
      },
      {
        isIncluded: true,
        feature: 'Advanced Features',
      },
      {
        isIncluded: true,
        feature: 'Unlimited Edits',
      },
      {
        isIncluded: true,
        feature: 'Priority Support',
      },
      {
        isIncluded: true,
        feature: 'Lifetime Updates',
      },
    ],
    callToAction: 'Contact Us',
  },
]
