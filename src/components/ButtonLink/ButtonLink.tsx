import React from 'react'
import styles from './ButtonLink.module.scss'

const ButtonLink = ({
  text,
  link,
  variation,
}: {
  text: string
  link: string
  variation: 'primary' | 'secondary' | 'tertiary'
}) => {
  return (
    <a
      href={link}
      className={`${styles.button_link} ${styles[variation]} button`}
    >
      {text}
    </a>
  )
}

export default ButtonLink
