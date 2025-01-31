import React from 'react'
import styles from './Footer.module.scss'
import { links } from './links'
import { Divider } from '../../Common/Divider'
import { contactInfo } from './contactInfo'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='page__inner'>
        <div className={styles.top_container}>
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
          <div className={styles.divider_container}>
            <Divider space='large' color='dark' />
          </div>
          <div className={styles.contact_info}>
            {contactInfo.map(item => (
              <div className={styles.item}>
                <div className={styles.icon__container}>
                  <item.icon className={styles.icon} />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <Divider space='large' color='dark' />
        <div className={styles.copyright}>
          <div
            className={styles.text}
          >{`© Copyright ${new Date().getFullYear()} Deer Lakes Web Design `}</div>
          <div className={styles.legal}>
            <a href='/terms-of-service'>Terms</a>
            <span>|</span>
            <a href='/privacy-policy'>Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
