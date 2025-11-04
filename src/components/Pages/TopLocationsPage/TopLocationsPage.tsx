import React from 'react'
import styles from './TopLocationsPage.module.scss'
type TopLocationsPageProps = {
  locationName: string
  content: { title: string; description: string }[]
}
const TopLocationsPage = ({ locationName, content }: TopLocationsPageProps) => {
  return (
    <div className={styles.web_design_importance}>
      <div className={`${styles.page__inner} page__inner`}>
        <div className={styles.image}>
          <img
            src='/images/jesse_lind_headshot_500.webp'
            alt='Jesse Lind Headshot'
            loading='lazy'
          />
        </div>
        <div className={styles.content}>
          <h1 className='page-title'>
            {locationName} Custom Web Development | Local Business Websites
          </h1>

          <p className={styles.description}>{content[0].description}</p>
          <div className={styles.web_design_info}>
            {content.slice(1).map(item => (
              <div className={styles.info_item}>
                <h2 className={`${styles.info_title} secondary-header`}>
                  {item.title}
                </h2>
                <p className={styles.info_description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopLocationsPage
