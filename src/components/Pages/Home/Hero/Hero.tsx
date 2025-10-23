import React from 'react'
import styles from './Hero.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'
import waves from '../../../../assets/waves.svg'
import { MONTHLY_SUM_PRICE } from '../../../../assets/data/pricing'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.hero__inner} page__inner`}>
        <div className={styles.content}>
          <h1 className='page-title text-inverted'>
            Web Design for <br /> Small Businesses
          </h1>
          <p className='section-paragraph text-inverted'>
            An elegant and effective online presence doesn't have to break the
            bank. Get a 100% hand coded website for your business starting at $
            {MONTHLY_SUM_PRICE}/mo.
          </p>
          <div className={styles.buttons}>
            <ButtonLink text='Get Started' link='/contact' color='tertiary' />
            <ButtonLink text='About Us' link='/about' color='secondary' />
          </div>
        </div>
        <div className={styles.image}>
          <picture>
            <source
              srcSet='/images/DLWD_mockup_landing_page_200.webp'
              media='(max-width: 768px)'
            />
            <img
              src='/images/DLWD_mockup_landing_page_400.webp'
              alt='Design mockup'
            />
          </picture>
        </div>
      </div>
      <div className={styles.waves}>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 393 108'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0 41.5882L21.8333 44.4706C43.6667 47.3529 87.3333 53.1176 131 41.5882C174.667 29.6471 218.333 0 262 0C305.667 0 349.333 29.6471 371.167 44.4706L393 59.2941V77H371.167C349.333 77 305.667 77 262 77C218.333 77 174.667 77 131 77C87.3333 77 43.6667 77 21.8333 77H0V41.5882Z'
            fill='#775EE7'
            fill-opacity='0.9'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0 17.2211L16.375 19.9923C32.75 22.7635 65.5 28.5039 98.25 29.8895C131 31.473 163.75 28.5039 196.5 31.473C229.25 34.2442 262 42.7558 294.75 38.599C327.5 34.2442 360.25 17.2211 376.625 8.51157L393 0V77H376.625C360.25 77 327.5 77 294.75 77C262 77 229.25 77 196.5 77C163.75 77 131 77 98.25 77C65.5 77 32.75 77 16.375 77H0V17.2211Z'
            fill='#A596E6'
            fill-opacity='0.9'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M0 24L16.375 31.7881C32.75 39.8543 65.5 55.9868 98.25 54.0397C131 51.8146 163.75 31.7881 196.5 29.8411C229.25 27.894 262 44.0265 294.75 47.9205C327.5 51.8146 360.25 44.0265 376.625 39.8543L393 35.9603V108H376.625C360.25 108 327.5 108 294.75 108C262 108 229.25 108 196.5 108C163.75 108 131 108 98.25 108C65.5 108 32.75 108 16.375 108H0V24Z'
            fill='white'
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero
