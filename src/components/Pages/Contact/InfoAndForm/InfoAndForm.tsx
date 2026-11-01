import React from 'react'
import styles from './InfoAndForm.module.scss'
import { contactInfo } from './contactInfo'
import ContactForm from './ContactForm'
const InfoAndForm = () => {
  return (
    <div className={styles.info_and_form}>
      <div className='page__inner'>
        <div className={styles.container}>
          <div className={styles.info}>
            <h2 className='section-title'>Let's work together</h2>
            <p className='section-paragraph'>
              Tell me what your business does and what you want from a website.
              Use the form, or call or email me directly. You'll hear back from
              me, not an assistant.
            </p>
            <div className={styles.contact_info_container}>
              {contactInfo.map(item => (
                <div className={styles.info_item} key={item.title}>
                  <div className={styles.icon_container}>
                    <item.icon className={styles.icon} />
                  </div>
                  <div className={styles.info_item_content}>
                    <h3>{item.title}</h3>

                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.form__container} card`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoAndForm
