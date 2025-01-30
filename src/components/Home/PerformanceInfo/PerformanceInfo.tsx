import React from 'react'
import styles from './PerformanceInfo.module.scss'
import { features } from './features'
const PerformanceInfo = () => {
  return (
    <div className={styles.performance_info}>
      <div className={`page__inner ${styles.page__inner}`}>
        <div className={styles.content}>
          <h1 className={`section-title text-inverted ${styles.box_1}`}>
            Why Page Speed, Accessibility, and SEO Matter for Your Business
          </h1>
          <div className={`${styles.images_container} ${styles.box_2}`}>
            <div className={styles.chart_image}>
              <img
                src='/images/DLWD_performance_stats_chart.jpg'
                alt='Performance Info'
              />
            </div>
            <div className={styles.times_image}>
              <img
                src='/images/DLWD_performance_stats_times.jpg'
                alt='Performance Info'
              />
            </div>
          </div>
          <div className={`${styles.features} ${styles.box_3}`}>
            {features.map((feature, index) => (
              <div className={styles.feature} key={index}>
                <div className={styles.icon__container}>
                  <feature.icon className={styles.icon} />
                </div>
                <div className={styles.right}>
                  <h2 className='text-inverted'>{feature.title}</h2>
                  <p className='text-inverted section-paragraph'>
                    <i>{feature.subtitle}</i> — {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerformanceInfo
