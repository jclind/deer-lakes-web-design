import React, { useState } from 'react'
import styles from './Content.module.scss'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'
import { LUMP_SUM_PRICE, MONTHLY_SUM_PRICE } from '../../../../assets/data/pricing'
import { ButtonLink } from '../../../Common/ButtonLink'

interface FAQType {
  question: string
  answer: string
}
const MONTHLY_DURATION = '6-month'
const faqs: FAQType[] = [
  {
    question: 'How long is the contract?',
    answer: `The monthly plan starts with a ${MONTHLY_DURATION} contract. After that it goes month to month, and you can cancel any time.`,
  },
  {
    question: `What if I cancel in the first 6 months?`,
    answer: `You'd pay the rest of the site's $${LUMP_SUM_PRICE} one-time price. What you've already paid counts toward it. If you cancel after 3 months, for example, you'd owe $${Number(LUMP_SUM_PRICE) - 3 * Number(MONTHLY_SUM_PRICE)}.`,
  },
  {
    question: 'Do I keep the site if I cancel?',
    answer:
      'Only if you buy it out. The monthly plan costs less up front, so it takes a while for your payments to add up to what the site is worth. If you cancel after the first 6 months, I take the site down unless you pay a buyout fee to own it.',
  },
  {
    question: 'Do I keep my domain if I cancel?',
    answer:
      "Yes. Your domain is yours. If I've been managing it, I'll transfer it to you.",
  },
  {
    question: 'Are there refunds?',
    answer:
      "Yes, during the design stage. If you aren't happy with the design, I'll refund you. Once you approve the design and I start building, refunds end.",
  },
  {
    question: 'How long until my site shows up on Google?',
    answer:
      'It takes time. Expect 6 months to a year before a new site ranks well. If you cancel and the site comes down, that progress goes with it.',
  },
  {
    question: 'Why do you hand-code sites instead of using WordPress?',
    answer:
      'WordPress sites run on themes and plugins. Each one adds code your visitors have to load and one more thing to keep patched. When I write the site myself, it loads only what it needs, and I control the design, speed, SEO, security, and accessibility directly.',
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
        {isOpen ? <LuChevronUp size={24} /> : <LuChevronDown size={24} />}
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
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className={styles.Content}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Frequently asked questions</h1>
            <p>
              How the monthly plan works, what happens if you cancel, and a few
              other things people ask me.
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
                text='Contact me'
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
