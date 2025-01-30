import React from 'react'
import styles from './Footer.module.scss'
import { links } from './links'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='page__inner'>
        <div className={styles.links__container}>
          <div className={styles.image}>
            <img
              src='/images/DLWD_logo_inverted.png'
              alt='Deer Lakes Web Design Icon'
            />
          </div>
          <div className={styles.links}>
            {links.map(link => (
              <div className={styles.link}>
                <a href={link.path}>{link.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
