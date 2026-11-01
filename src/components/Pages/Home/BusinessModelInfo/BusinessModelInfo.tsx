import React from 'react'
import styles from './BusinessModelInfo.module.scss'
import { features } from './features'
import { BsCheckCircle } from 'react-icons/bs'
import { ButtonLink } from '../../../Common/ButtonLink'
import { MONTHLY_SUM_PRICE } from '../../../../assets/data/pricing'
const BusinessModelInfo = () => {
  return (
    <div className={styles.business_model_info}>
      <div className={`page__inner ${styles.page__inner}`}>
        <div className={styles.headshot_container}>
          <div className={styles.headshot_image}>
            <img
              src='/images/jesse_lind_headshot_500.webp'
              alt='headshot'
              loading='lazy'
            />
          </div>
          <span className={styles.headshot_title}>
            Jesse Lind, owner and developer
          </span>
        </div>
        <div className={styles.content}>
          <h1 className='section-title'>
            Affordable websites
            <br />
            for small businesses
          </h1>
          <p className='section-paragraph'>
            For ${MONTHLY_SUM_PRICE} a month you get <strong>5 pages</strong>, the{' '}
            <strong>design</strong>, the <strong>build</strong>, and{' '}
            <strong>hosting</strong>. Extra pages are $100 each. The first
            contract is <strong>6 months</strong>, then it goes month to month.
            You deal with me the whole time, and if you don't like the design,
            you get your money back before I start building.
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
          <ButtonLink text="Let's get started" link='/contact' size='large' />
        </div>
      </div>
    </div>
  )
}

export default BusinessModelInfo
