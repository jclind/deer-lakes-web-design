import { BsCircleSquare, BsStar, BsXDiamond } from 'react-icons/bs'

export const pricing = [
  {
    icon: BsCircleSquare,
    type: 'Lump Sum',
    cost: '$3200',
    costSubHeader: '+25/mo hosting',
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
  },
  {
    icon: BsStar,
    type: 'Monthly',
    cost: '$150/mo',
    costSubHeader: 'Per Month',
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
  },
  {
    icon: BsXDiamond,
    type: 'Custom',
    cost: 'Custom',
    costSubHeader: '',
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
  },
]
