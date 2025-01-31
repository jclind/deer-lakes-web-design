import React from 'react'
import styles from './Hero.module.scss'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className='page__inner'>
        <h1 className='page-title'>About Us</h1>
        <p className='page-paragraph'>
          At Deer Lakes Web Design, our mission is to make professional,
          high-quality web design accessible to every small business. We believe
          that having a great website should be simple, affordable, and
          stress-free. Our goal is to create and grow long term relationships
          with our clients.
        </p>
      </div>
    </div>
  )
}

export default Hero
