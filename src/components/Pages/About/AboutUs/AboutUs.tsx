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
              <h2 className='section-title text-inverted'>Our Goal</h2>
              <p className='section-paragraph text-inverted'>
                Deer Lakes Web Design was started with one goal in mind: to
                eliminate the barriers small businesses face when trying to
                establish a strong online presence. For too long, professional,
                high quality websites have been out of reach for many due to
                high costs and confusing processes. We’re here to change that.
              </p>
            </div>
            <div className={styles.our_values}>
              <h2 className='section-title text-inverted'>Our Values</h2>
              <p className='section-paragraph text-inverted'>
                We’re dedicated to delivering a website that will benefit your
                business which is why we hold true to these important values:
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
                Not only do these values help relationships with our clients,
                they also ensure we create the best website we can for you as
                well as keeping Google and your customers happy.
              </p>
              <p className='section-paragraph text-inverted'>
                For more information on why our values are as important with
                search engines as well as our clients you can learn more on our
                ‘Web Design’ page.
              </p>
            </div>
            <ButtonLink
              text='Learn About Web Design'
              link='/web-design'
              size='large'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
