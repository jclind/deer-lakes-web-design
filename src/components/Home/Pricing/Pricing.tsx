import React from 'react'
import styles from './Pricing.module.scss'
import { pricing } from './pricingData'
import { BsCheck, BsX } from 'react-icons/bs'
import { ButtonLink } from '../../Common/ButtonLink'
import { Divider } from '../../Common/Divider'
const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <div className='page__inner'>
        <h1 className='section-title'>
          Select The Best Plan
          <br />
          For Your Needs
        </h1>
        <div className={styles.pricing__container}>
          {pricing.map(item => (
            <div
              className={`${styles.pricing__item} ${styles[item.theme]} card`}
            >
              <div
                className={`${styles.icon__container} ${styles[item.theme]}`}
              >
                <item.icon className={styles.icon} />
              </div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.price__container}>
                <div className={styles.price}>{item.price}</div>
                <div className={styles.price__subheader}>
                  {item.priceSubHeader}
                </div>
              </div>

              <Divider />

              <div className={styles.features}>
                {item.features.map(feature => (
                  <div
                    className={`${styles.feature} ${
                      feature.isIncluded ? styles.included : ''
                    }`}
                  >
                    <div className={styles.feature__icon}>
                      {feature.isIncluded ? (
                        <BsCheck className={styles.icon__check} />
                      ) : (
                        <BsX className={styles.icon__x} />
                      )}
                    </div>
                    <div className={styles.feature__text}>
                      {feature.feature}
                    </div>
                  </div>
                ))}
              </div>
              <ButtonLink
                text={item.callToAction}
                link='/contact'
                size='full_width'
                color={`${item.theme === 'primary' ? 'white' : 'primary'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
