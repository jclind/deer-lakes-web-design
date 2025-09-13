import React, { useState } from 'react'
import styles from './Content.module.scss'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { LUMP_SUM_PRICE } from '../../../../assets/data/pricing'
import { ButtonLink } from '../../../Common/ButtonLink'

interface FAQType {
  question: string
  answer: string
}
const MONTHLY_DURATION = '6 month'
const faqs: FAQType[] = [
  {
    question: 'How long does the subscription last?',
    answer: `With our monthly package your subscription initially lasts for ${MONTHLY_DURATION}s. After that period you can cancel anytime and the plan continues month to month. If you cancel the site will be taken down unless we negotiate a 'buyout' fee.`,
  },
  {
    question: `What happens if I cancel before ${MONTHLY_DURATION}s is completed?`,
    answer: `If you cancel before the ${MONTHLY_DURATION} minimum period, you are responsible for paying the full price of what the site would normally cost (${LUMP_SUM_PRICE}).`,
  },
  {
    question: `What happens if I cancel after ${MONTHLY_DURATION}s`,
    answer: `If you choose to cancel anytime after the initial ${MONTHLY_DURATION} minimum period, the website will be taken down unless you pay the buyout fee to take ownership.`,
  },
  {
    question: 'Do I keep my site if I cancel my subscription?',
    answer:
      'No, you do not keep the website if you cancel your subscription. Because our monthly plan offers a lower upfront cost, it takes time to reach the full value of a lump-sum site. The website will be taken down unless you pay the buyout fee to gain full ownership. Your domain can still be transferred to you if it was previously managed by us.',
  },
  {
    question: 'If I cancel my subscription do I keep my domain?',
    answer:
      'Yes, your domain belongs to you and will be transferred to you if previously managed by us.',
  },
  {
    question: 'Are there refunds?',
    answer: `Yes, if any part of the design process does not meet your standards, we offer a refund. We want you to be confident in the website you will be receiving. However, once the design is approved by the client and development has begun, refunds are no longer available.`,
  },
  {
    question: 'How long until my site gets ranked with SEO?',
    answer:
      'SEO results take time. It can take 6-months to a year for your website to gain significant visibility and ranking on search engines, which is why we prioritize building long-term relationships with our clients. If the subscription is canceled before results are achieved, all the SEO work and progress will be lost, so maintaining the site ensures your investment continues to grow.',
  },
  {
    question: 'Why do you custom code your sites? Why not wordpress?',
    answer:
      'We custom code our websites to ensure complete control over every aspect of design, performance, SEO, security, and accessibility. Unlike page builders or templates, hand-coded websites are faster, lighter, fully customizable, and easier to maintain. This approach allows us to create a website that is optimized for your business, providing a better user experience and stronger search engine performance.',
  },
]

interface FAQItemProps {
  faq: FAQType
  isOpen: boolean
  toggle: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, toggle }) => (
  <div className={styles.faqItem}>
    <button
      type='button' // <-- add this
      className={`${styles['faq-question']} ${isOpen ? styles.open : ''}`}
      onClick={toggle}
    >
      {faq.question}
      <span className={styles.chevron}>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </span>
    </button>
    <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>
      {faq.answer}
    </div>
  </div>
)

const Content = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    console.log('TESTING')
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className={styles.Content}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Frequently Asked Questions</h1>
            <p>
              A list of frequently asked questions listed out to help our
              clients get a better understanding of our workflow and values.
            </p>
          </div>
          <div className={styles.faqSection}>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                toggle={() => handleToggle(index)}
              />
            ))}
          </div>
          <div className={styles.moreInfo}>
            <p>
              For more info,{' '}
              <a href='/web-design'>
                checkout my web design values and process
              </a>
              . Or shoot me a message!
            </p>
            <div className={styles.buttons}>
              <ButtonLink
                text='Contact Me'
                link='/contact'
                // color='primary'
                size='large'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
