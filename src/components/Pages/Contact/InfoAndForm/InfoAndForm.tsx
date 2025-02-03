import React from 'react'
import styles from './InfoAndForm.module.scss'
import { contactInfo } from './contactInfo'
const InfoAndForm = () => {
  return (
    <div className={styles.info_and_form}>
      <div className='page__inner'>
        <div className={styles.container}>
          <div className={styles.info}>
            <h2 className='section-title'>Let's Work Together</h2>
            <p className='section-paragraph'>
              Have a project in mind or need more information? Don’t hesitate to
              reach out with your ideas for your new website! Feel free to drop
              me a message using the contact form or contact me directly by
              phone or email. I’m always available to discuss how we can work
              together to achieve your goals.
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
          <div className={`${styles.form__container} card`}></div>
        </div>
      </div>
    </div>
  )
}

export default InfoAndForm
