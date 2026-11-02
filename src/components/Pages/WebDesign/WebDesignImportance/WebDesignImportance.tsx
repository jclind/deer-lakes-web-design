import React from 'react'
import styles from './WebDesignImportance.module.scss'
import { info } from './info'
const WebDesignImportance = () => {
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
          <h1 className='page-title'>What good web design takes</h1>

          <p className={styles.description}>
            I write every line of code for the sites I build. That gives me
            direct control over how your site looks, how fast it loads, how it
            shows up on Google, and who can use it. Here's why each of those
            matters. If you have questions, send me a message.
          </p>
          <div className={styles.web_design_info}>
            {info.map(item => (
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

export default WebDesignImportance
