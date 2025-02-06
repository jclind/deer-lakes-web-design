import { BsClock, BsPhone, BsEnvelope } from 'react-icons/bs'
import { EMAIL_ADDRESS, PHONE_NUMBER } from '../../../../assets/data/legalInfo'
export const contactInfo = [
  {
    icon: BsEnvelope,
    title: 'Email Us',
    subtitle: EMAIL_ADDRESS,
  },
  {
    icon: BsPhone,
    title: 'Call Us',
    subtitle: PHONE_NUMBER,
  },

  {
    icon: BsClock,
    title: '24 / 7 Support',
    subtitle: 'Prompt response time',
  },
]
