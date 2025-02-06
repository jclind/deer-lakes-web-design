import React from 'react'
import styles from './MountainsHero.module.scss'
const MountainsHero = ({
  title,
  isDark = false,
  children,
}: {
  title: string
  isDark?: boolean
  children?: React.ReactNode
}) => {
  return (
    <div className={`${styles.mountains_hero} ${isDark ? styles.dark : ''}`}>
      <div className={`${styles.page__inner} page__inner`}>
        <h1 className='page-title'>{title}</h1>
        {children}
      </div>
      {isDark ? (
        <div className={styles.mountains_image_dark}></div>
      ) : (
        <div className={styles.mountains_image_light}></div>
      )}
    </div>
  )
}

export default MountainsHero
