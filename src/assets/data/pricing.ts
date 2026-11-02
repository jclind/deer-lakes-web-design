import { BsCircleSquare, BsStar, BsXDiamond } from 'react-icons/bs'

export const LUMP_SUM_PRICE = '1600'
export const MONTHLY_SUM_PRICE = '100'

export const pricing = [
  {
    icon: BsCircleSquare,
    title: 'One-time',
    price: `$${LUMP_SUM_PRICE}`,
    priceSubHeader: '+$25/mo hosting',
    theme: 'secondary',
    features: [
      {
        isIncluded: true,
        feature: 'Design and development',
      },
      {
        isIncluded: true,
        feature: '5 pages (+$100 each extra)',
      },
      {
        isIncluded: true,
        feature: '$25/mo hosting',
      },
      {
        isIncluded: true,
        feature: 'Unlimited edits (+$50/mo)',
      },
      {
        isIncluded: false,
        feature: 'Priority support',
      },
      {
        isIncluded: false,
        feature: 'Lifetime updates',
      },
    ],
    callToAction: 'Get started',
  },
  {
    icon: BsStar,
    title: 'Monthly',
    price: `$${MONTHLY_SUM_PRICE}`,
    priceSubHeader: 'Per month',
    theme: 'primary',
    features: [
      {
        isIncluded: true,
        feature: 'Design and development',
      },
      {
        isIncluded: true,
        feature: '5 pages (+$100 each extra)',
      },
      {
        isIncluded: true,
        feature: 'Hosting included',
      },
      {
        isIncluded: true,
        feature: 'Unlimited edits',
      },
      {
        isIncluded: true,
        feature: 'Priority support',
      },
      {
        isIncluded: true,
        feature: 'Lifetime updates',
      },
    ],
    callToAction: 'Get started',
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
        feature: 'Fully custom design',
      },
      {
        isIncluded: true,
        feature: 'Unlimited pages',
      },
      {
        isIncluded: true,
        feature: 'Advanced features',
      },
      {
        isIncluded: true,
        feature: 'Unlimited edits',
      },
      {
        isIncluded: true,
        feature: 'Priority support',
      },
      {
        isIncluded: true,
        feature: 'Lifetime updates',
      },
    ],
    callToAction: 'Contact me',
  },
]
