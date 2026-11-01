import React from 'react'
import styles from './AboutUs.module.scss'
import { BsCheckCircle } from 'react-icons/bs'
import { values } from './values'
import { ButtonLink } from '../../../Common/ButtonLink'
const AboutUs = () => {
  return (
    <div className={styles.about_us}>
      <div className='page__inner'>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src='/images/about_us.svg' alt='' />
          </div>
          <div className={styles.content}>
            <div className={styles.our_goal}>
              <h2 className='section-title text-inverted'>Why I started</h2>
              <p className='section-paragraph text-inverted'>
                A good website shouldn't cost a small business thousands of
                dollars before it brings in a single customer. I kept seeing
                owners either go without a site or pay a lot for one that loaded
                slowly and never showed up on Google. A monthly plan fixes the
                first problem, and doing the work properly fixes the second.
              </p>
            </div>
            <div className={styles.our_values}>
              <h2 className='section-title text-inverted'>What I care about</h2>
              <p className='section-paragraph text-inverted'>
                Every site I build gets the same priorities:
              </p>
              <div className={styles.values}>
                {values.map(value => (
                  <div className={styles.value} key={value}>
                    <BsCheckCircle className={styles.icon} />
                    {value}
                  </div>
                ))}
              </div>
              <p className='section-paragraph text-inverted'>
                Google looks at most of these same things when it ranks your
                site, so getting them right helps with customers and with
                search. The Web Design page explains each one.
              </p>
            </div>
            <ButtonLink
              text='Learn about web design'
              link='/web-design'
              size='medium'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
