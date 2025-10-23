import React from 'react'
import styles from './AboutMe.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'
import { MONTHLY_SUM_PRICE } from '../../../../assets/data/pricing'
const AboutMe = () => {
  return (
    <div className={styles.about_me}>
      <div className='page__inner'>
        <h1 className='section-title'>About Me</h1>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src='/images/about_me_headshot.webp' alt='' />
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2>My Story & Business Model</h2>
              <p className='section-paragraph'>
                Hi there, I’m Jesse and I am the sole owner and lead developer
                of Deer Lakes Web Designs. My journey in web development began
                over 7 years ago with a simple curiosity about how websites are
                built and the science behind exceptional designs. Because I am
                mostly self taught, I have studied high performing websites and
                top class designs. I have made it a point to learn how to make
                websites the right way through hand coding everything and
                implementing the best practices.
              </p>
              <p className='section-paragraph'>
                I personally believe that anyone can use their skills to be a
                blessing to others and because of this I discovered that I could
                especially help small businesses. In my experience many small
                businesses don’t have the money to spend thousands of dollars
                upfront on a new website. And even when they do they will be
                overcharged, taken advantage of, or simply given a poorly
                optimized or designed website. It’s to find someone who wants
                the best for you and your business. That’s why I take a
                different approach to my development and pricing. With our $0
                and only ${MONTHLY_SUM_PRICE} per month plan you don’t have to
                worry about paying thousands of dollars without knowing the
                quality you will be receiving. At Deer Lakes Web Designs you can
                be sure that your website will have the best possible
                performance and a design that works for you. Besides, if we
                can’t create a design that is suitable for you, you can rest
                assured with our money back guarantee.
              </p>
            </div>
            <ButtonLink text='Contact Us' link='/contact' size='large' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
