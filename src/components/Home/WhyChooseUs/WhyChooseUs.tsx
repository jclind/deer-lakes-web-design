import React from 'react'
import styles from './WhyChooseUs.module.scss'
import { features } from './features'
import { ButtonLink } from '../../ButtonLink'

const WhyChooseUs = () => {
  return (
    <div className={styles.why_choose_us}>
      <div className='page__inner'>
        <div className={styles.content}>
          <h1 className='section-title'>Why Choose Us</h1>
          <p className='section-paragraph'>
            At Deer Lakes Web Design, we believe that a fast, clean, and
            functional website can significantly boost the success of your small
            business. We also know that high website costs can be overwhelming,
            especially for smaller budgets. That’s why our goal is to help you
            get online quickly, efficiently, and affordably. Whether you're
            launching a new business or refreshing your existing site, we’re
            here to make the process simple and cost-effective. Here’s what we
            do:
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
        <ButtonLink text='Contact Us' link='/contact' size='large' />
      </div>
    </div>
  )
}

export default WhyChooseUs
