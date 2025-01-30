import React from 'react'
import styles from './Hero.module.scss'
import { ButtonLink } from '../../Common/ButtonLink'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.hero__inner} page__inner`}>
        <div className={styles.content}>
          <h1 className='page-title text-inverted'>
            Web Design for <br /> Small Businesses
          </h1>
          <p className='section-paragraph text-inverted'>
            An elegant and effective online presence doesn't have to break the
            bank. Get a 100% hand coded website for your business starting at
            $150/mo.
          </p>
          <div className={styles.buttons}>
            <ButtonLink text='Get Started' link='/contact' color='tertiary' />
            <ButtonLink text='Learn More' link='/about' color='secondary' />
          </div>
        </div>
        <div className={styles.image}>
          <img src='/images/DLWD_mockup_landing_page.jpg' alt='Design mockup' />
        </div>
      </div>
      <div className={styles.waves}></div>
    </div>
  )
}

export default Hero
