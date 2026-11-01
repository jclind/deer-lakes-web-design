import React from 'react'
import styles from './AboutMe.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'
import { MONTHLY_SUM_PRICE } from '../../../../assets/data/pricing'
const AboutMe = () => {
  return (
    <div className={styles.about_me}>
      <div className='page__inner'>
        <h1 className='section-title'>About me</h1>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src='/images/about_me_headshot.webp' alt='' />
          </div>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2>My story</h2>
              <p className='section-paragraph'>
                I'm Jesse, and I run Deer Lakes Web Design by myself. I've been
                building websites since 2016. I started because I wanted to know
                how websites worked and why some looked so much better than
                others. I'm mostly self-taught. I learned by pulling apart fast,
                well-designed sites to see what made them good, and I still
                write every site by hand.
              </p>
              <p className='section-paragraph'>
                I believe people should use what they're good at to help others,
                and for me that turned out to be small businesses. A lot of
                owners can't put thousands of dollars into a website up front.
                The ones who do often get overcharged, or end up with a slow site
                nobody can find. So I price it differently. You pay nothing down
                and ${MONTHLY_SUM_PRICE} a month, which means you aren't betting
                a big check on work you haven't seen yet. If I can't come up with
                a design you're happy with, you get your money back.
              </p>
            </div>
            <ButtonLink text='Contact me' link='/contact' size='large' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
