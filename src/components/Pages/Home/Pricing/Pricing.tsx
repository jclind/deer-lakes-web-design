import React from 'react'
import styles from './Pricing.module.scss'
import PricingCardContainer from '../../../Common/PricingCardContainer/PricingCardContainer'
const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <div className='page__inner'>
        <h1 className='section-title'>
          Pick a plan
        </h1>
        <PricingCardContainer />
      </div>
    </div>
  )
}

export default Pricing
