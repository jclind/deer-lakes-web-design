import React from 'react'
import styles from './PricingContent.module.scss'
import PricingCardContainer from '../../../Common/PricingCardContainer/PricingCardContainer'
const PricingContent = () => {
  return (
    <div className={styles.pricing_content}>
      <div className='page__inner'>
        <div className={styles.heading}>
          <h1 className='section-title'>Pricing</h1>
          <h2 className='section-subtitle'>
            Pick the plan that fits
          </h2>
        </div>
        <PricingCardContainer />
      </div>
    </div>
  )
}

export default PricingContent
