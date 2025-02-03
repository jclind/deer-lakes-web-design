import React from 'react'
import styles from './WebDesignImportance.module.scss'
import { info } from './info'
const WebDesignImportance = () => {
  return (
    <div className={styles.web_design_importance}>
      <div className={`${styles.page__inner} page__inner`}>
        <div className={styles.image}>
          <img
            src='/images/jesse_lind_headshot.jpg'
            alt='Jesse Lind Headshot'
          />
        </div>
        <div className={styles.content}>
          <h1 className='page-title'>The Importance Of Good Web Design</h1>

          <p className={styles.description}>
            At Deer Lakes Web Designs, we take a handcrafted approach to
            building websites—every line of code is written by us, giving me
            complete control over your site’s design, performance, SEO,
            security, and accessibility. This ensures your website isn’t just
            visually stunning but also optimized to drive growth for your
            business. Any additional questions? Send me a message, I’d love to
            hear from you! websites—every line of code is written by us, giving
            me complete control over your site’s design, performance, SEO,
            security, and accessibility. This ensures your website isn’t just
            visually stunning but also optimized to drive growth for your
            business. Any additional questions? Send me a message, I’d love to
            hear from you!
          </p>
          <div className={styles.web_design_info}>
            {info.map(item => (
              <div className={styles.info_item}>
                <h3 className={`${styles.info_title} secondary-header`}>
                  {item.title}
                </h3>
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
