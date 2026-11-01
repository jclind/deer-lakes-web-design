import React from 'react'
import styles from './Portfolio.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'

const projects = [
  {
    title: 'Tim Lewis Construction',
    description:
      'I rebuilt their site to load faster, with a page for each service and a simple gallery of past projects.',
    imageSrc: '/images/timlewisconstruction_mockup.png',
    link: 'https://www.timlewisconstruction.com/',
    buttonText: 'Visit website',
  },
  {
    title: 'Flooring sample',
    description:
      'Services, a gallery of past jobs, and customer reviews, with a free quote button in the menu.',
    imageSrc: '/images/project_mockup_1.png',
    link: '/contact',
  },
  {
    title: 'Chiropractor sample',
    description:
      'Services, a page for new patients, and reviews, with Book appointment and Call today buttons.',
    imageSrc: '/images/project_mockup_3.png',
    link: '/contact',
  },
]

const Portfolio = () => {
  return (
    <div className={styles.Portfolio}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className='section-title'>
              Recent work
            </h1>
            <div className={styles.right}>
              <p className='section-paragraph'>
                A few sites and designs for small businesses, so you can see how I
                lay out a site before you call.
              </p>
            </div>
          </div>
          <div className={styles.projectsContainer}>
            {projects.map((project, index) => (
              <div className={styles.project} key={index}>
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  loading='lazy'
                />
                <div className={styles.text}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <ButtonLink
                  text={project.buttonText || 'Ask about this design'}
                  link={project.link}
                  size='full_width'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
