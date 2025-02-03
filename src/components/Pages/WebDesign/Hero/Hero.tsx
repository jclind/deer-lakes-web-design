import React from 'react'
import styles from './Hero.module.scss'
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className='page__inner'>
        <h1 className='page-title'>Web Design</h1>
      </div>
      <div className={styles.mountains_image}></div>
    </div>
  )
}

export default Hero
