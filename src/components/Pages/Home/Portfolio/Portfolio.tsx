import React from 'react'
import styles from './Portfolio.module.scss'
import { ButtonLink } from '../../../Common/ButtonLink'

const projects = [
  {
    title: 'Modern Flooring Site',
    description:
      'A clean, modern design for a flooring business, featuring easy navigation, detailed service pages, and a gallery to highlight past projects and materials.',
    imageSrc: '/images/project_mockup_1.png',
    link: '/contact',
  },
  {
    title: 'Tim Lewis Construction',
    description:
      'For Tim Lewis Construction, we rebuilt their site to be faster, cleaner, and easier to navigate, with straightforward service pages and a simple project gallery.',
    imageSrc: '/images/timlewisconstruction_mockup.png',
    link: 'https://www.timlewisconstruction.com/',
    buttonText: 'Visit Website',
  },
  {
    title: 'Clean Chiropractor Site',
    description:
      'A tailored chiropractor site layout with clear service sections, simple navigation, and a calm, professional look designed to build trust.',
    imageSrc: '/images/project_mockup_3.png',
    link: '/contact',
  },
  // Additional projects can be added here
]

const Portfolio = () => {
  return (
    <div className={styles.Portfolio}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className='section-title'>
              See the Quality of Our Work First-Hand
            </h1>
            <div className={styles.right}>
              <p className='section-paragraph'>
                We help small businesses create a fast, professional online
                presence. No matter your industry, we’re dedicated to building a
                site that supports your goals and helps your business grow.
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
                  text={project.buttonText || 'View Design'}
                  link={project.link}
                  size='full_width'
                />
              </div>
            ))}
            {/* <div className={styles.project}>
              <img
                src='/images/project_mockup_1.png'
                alt='Flooring Website Mockup'
                loading='lazy'
              />
              <div className={styles.text}>
                <h2>Modern Flooring Site</h2>
                <p>
                  A clean, modern design for a flooring business, featuring easy
                  navigation, detailed service pages, and a gallery to highlight
                  past projects and materials.
                </p>
              </div>
              <ButtonLink text='View Design' link='/contact' size='large' />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
