import React from 'react'
import styles from './ButtonLink.module.scss'

const ButtonLink = ({
  text,
  link,
  color = 'primary',
  size = 'medium',
}: {
  text: string
  link: string
  isExternalLink?: boolean
  color?: 'primary' | 'secondary' | 'tertiary' | 'white'
  size?: 'small' | 'medium' | 'large' | 'full_width'
}) => {
  let isExternalLink = !!link.startsWith('http')

  return (
    <a
      href={link}
      className={`${styles.button_link} ${styles[color]} ${styles[size]} button`}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
    >
      {text}
    </a>
  )
}

export default ButtonLink
