import React from 'react'
import styles from './BusinessModelInfo.module.scss'
import { features } from './features'
import { BsCheckCircle } from 'react-icons/bs'
import { ButtonLink } from '../../../Common/ButtonLink'
const BusinessModelInfo = () => {
  return (
    <div className={styles.business_model_info}>
      <div className={`page__inner ${styles.page__inner}`}>
        <div className={styles.headshot_container}>
          <div className={styles.headshot_image}>
            <img src='/images/jesse_lind_headshot.jpg' alt='headshot' />
          </div>
          <span className={styles.headshot_title}>
            Jesse Lind - Owner & Developer
          </span>
        </div>
        <div className={styles.content}>
          <h1 className='section-title'>
            Affordable Websites
            <br />
            Built for Your Small Business
          </h1>
          <p className='section-paragraph'>
            With our $150/month plan, you'll get{' '}
            <strong>5 standard pages</strong> (just $100 per additional page),
            plus <strong>professional design</strong>,{' '}
            <strong>development</strong>, and <strong>hosting</strong>
            —everything you need to get your site online. Backed by an initial{' '}
            <strong>6-month contract</strong>, your website will be secure,
            user-friendly, and built to help your business grow. Enjoy
            personalized support and our money-back guarantee.
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div className={`${styles.feature} `} key={index}>
                <div className={styles.head}>
                  <div className={styles.icon__container}>
                    <BsCheckCircle className={styles.icon} />
                  </div>
                  <h2>{feature.title}</h2>
                </div>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <ButtonLink text="Let's Get Started" link='/contact' size='large' />
        </div>
      </div>
    </div>
  )
}

export default BusinessModelInfo
