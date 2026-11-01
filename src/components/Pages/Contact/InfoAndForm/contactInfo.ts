import { BsClock, BsPhone, BsEnvelope } from 'react-icons/bs'
import { EMAIL_ADDRESS, PHONE_NUMBER } from '../../../../assets/data/legalInfo'
export const contactInfo = [
  {
    icon: BsEnvelope,
    title: 'Email',
    subtitle: EMAIL_ADDRESS,
  },
  {
    icon: BsPhone,
    title: 'Call',
    subtitle: PHONE_NUMBER,
  },

  {
    icon: BsClock,
    title: 'Support',
    subtitle: 'I reply within a day',
  },
]
