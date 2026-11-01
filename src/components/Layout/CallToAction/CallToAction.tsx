import React from 'react'
import styles from './CallToAction.module.scss'
import { ButtonLink } from '../../Common/ButtonLink'
const CallToAction = () => {
  return (
    <div className={styles.call_to_action}>
      <div className={`${styles.card} card page__inner`}>
        <div className={styles.image}>
          <img
            src='/images/DLWD_icon_200.webp'
            alt='Deer Lakes Web Design Icon'
            loading='lazy'
          />
        </div>
        <div className={styles.content}>
          <h1 className='section-title'>Ready to get started?</h1>
          <p className='section-paragraph'>
            Tell me about your business and what you need from a website. I'll
            get back to you with ideas and a price.
          </p>
          <ButtonLink text='Contact me' link='/contact' size='large' />
        </div>
      </div>
      <div className={styles.half_background}></div>
    </div>
  )
}

export default CallToAction
