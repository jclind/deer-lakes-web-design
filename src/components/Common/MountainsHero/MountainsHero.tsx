import React from 'react'
import styles from './MountainsHero.module.scss'
const MountainsHero = ({ title }: { title: string }) => {
  return (
    <div className={styles.mountains_hero}>
      <div className='page-title'>{title}</div>
      <div className={styles.mountains_image}></div>
    </div>
  )
}

export default MountainsHero
