import styles from './TopLocationsPage.module.scss'
import { MONTHLY_SUM_PRICE } from '../../../assets/data/pricing'

type TopLocationsPageProps = {
  locationName: string
  nearby: string
}

const TopLocationsPage = ({ locationName, nearby }: TopLocationsPageProps) => {
  const sections = [
    {
      title: 'What you get',
      description: `5 pages, design, hosting, updates, and edits for $${MONTHLY_SUM_PRICE} a month. The first contract is 6 months, then it's month to month.`,
    },
    {
      title: 'Fast on phones',
      description:
        'Most people looking for a local business search on their phone. I build the phone layout first, and every site I build scores 95 or higher on Google PageSpeed.',
    },
    {
      title: `Showing up in ${locationName} searches`,
      description: `When someone searches for what you do in ${locationName}, Google needs to see where you work and what you offer. I set up the page titles, descriptions, and content for that from the start.`,
    },
    {
      title: 'Hand-coded, not a template',
      description:
        'No WordPress and no page builder. Your site loads only the code it needs, and there are no plugins to patch.',
    },
    {
      title: 'You work with me',
      description:
        'Text or email and you reach the person who built your site.',
    },
  ]

  return (
    <div className={styles.web_design_importance}>
      <div className={`${styles.page__inner} page__inner`}>
        <div className={styles.image}>
          <img
            src='/images/jesse_lind_headshot_500.webp'
            alt='Jesse Lind'
            loading='lazy'
          />
        </div>
        <div className={styles.content}>
          <h2 className='page-title'>Websites for {locationName} businesses</h2>
          <p className={styles.description}>
            I'm Jesse Lind, and I build websites for small businesses in{' '}
            {locationName} and nearby, including {nearby}. I write every site by
            hand, keep it running after launch, and charge ${MONTHLY_SUM_PRICE} a
            month with nothing down.
          </p>
          <div className={styles.web_design_info}>
            {sections.map(item => (
              <div className={styles.info_item} key={item.title}>
                <h3 className={`${styles.info_title} secondary-header`}>
                  {item.title}
                </h3>
                <p className={styles.info_description}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopLocationsPage
