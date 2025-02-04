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
          />
        </div>
        <div className={styles.content}>
          <h1 className='section-title'>Ready To Get Started?</h1>
          <p className='section-paragraph'>
            Let’s make your business stand out online. Get in touch with us
            today to discuss your project, and we’ll help you get started with a
            website that works for you.
          </p>
          <ButtonLink text='Contact Us' link='/contact' size='large' />
        </div>
      </div>
      <div className={styles.half_background}></div>
    </div>
  )
}

export default CallToAction
