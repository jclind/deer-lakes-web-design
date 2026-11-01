import React from 'react'
import styles from './WhyChooseUs.module.scss'
import { features } from './features'
import { ButtonLink } from '../../../Common/ButtonLink'

const WhyChooseUs = () => {
  return (
    <div className={styles.why_choose_us}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='section-title'>Why work with me</h1>
          <p className='section-paragraph'>
            A small business site needs to load fast, show up on Google, and make
            it easy to call or email you. Quotes for that usually start in the
            thousands. I spread the cost out over a monthly plan and stay on to
            keep the site working. Here's what you get:
          </p>
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div className={`${styles.feature} card`} key={index}>
                <div className={styles.icon__container}>
                  <feature.icon className={styles.icon} />
                </div>
                <h2 className='card-title'>{feature.title}</h2>
                <p className='card-paragraph'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <ButtonLink text='Contact me' link='/contact' size='large' />
      </div>
    </div>
  )
}

export default WhyChooseUs
