import React from 'react'
import styles from './TermsAndPrivacy.module.scss'
import {
  EMAIL_ADDRESS,
  CITY,
  COUNTRY,
  STATE,
  ZIP_CODE,
  ADDRESS,
  WEBSITE_URL,
  LEGAL_NAME,
} from '../../../assets/data/legalInfo'
const PrivacyPolicy = () => {
  const personalInformationCollectedData = [
    {
      category: 'A. Identifiers',
      examples:
        'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name',
      collected: 'NO',
    },
    {
      category:
        'B. Personal information as defined in the California Customer Records statute',
      examples:
        'Name, contact information, education, employment, employment history, and financial information',
      collected: 'NO',
    },
    {
      category:
        'C. Protected classification characteristics under state or federal law',
      examples:
        'Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data',
      collected: 'NO',
    },
    {
      category: 'D. Commercial information',
      examples:
        'Transaction information, purchase history, financial details, and payment information',
      collected: 'NO',
    },
    {
      category: 'E. Biometric information',
      examples: 'Fingerprints and voiceprints',
      collected: 'NO',
    },
    {
      category: 'F. Internet or other similar network activity',
      examples:
        'Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements',
      collected: 'NO',
    },
    {
      category: 'G. Geolocation data',
      examples: 'Device location',
      collected: 'NO',
    },
    {
      category: 'H. Audio, electronic, sensory, or similar information',
      examples:
        'Images and audio, video or call recordings created in connection with our business activities',
      collected: 'NO',
    },
    {
      category: 'I. Professional or employment-related information',
      examples:
        'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us',
      collected: 'NO',
    },
    {
      category: 'J. Education Information',
      examples: 'Student records and directory information',
      collected: 'NO',
    },
    {
      category: 'K. Inferences drawn from collected personal information',
      examples:
        'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics',
      collected: 'NO',
    },
    {
      category: 'L. Sensitive personal Information',
      examples: '',
      collected: 'NO',
    },
  ]
  return (
    <div className={styles.privacy_policy}>
      <div className='page__inner'>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Privacy Policy</h1>
          </div>

          <div className={styles.last_updated}>
            Last updated February 04, 2025
          </div>
          <section>
            <div className='text'>
              <p>
                This Privacy Notice for {LEGAL_NAME} ("
                <strong>we</strong>," "<strong>us</strong>," or "
                <strong>our</strong>"), describes how and why we might access,
                collect, store, use, and/or share ("<strong>process</strong>")
                your personal information when you use our services ("
                <strong>Services</strong>"), including when you:
              </p>
              <ul>
                <li>
                  Visit our website at <a href={WEBSITE_URL}>{WEBSITE_URL}</a>,
                  or any website of ours that links to this Privacy Notice
                </li>
                <li>
                  Engage with us in other related ways, including any sales,
                  marketing, or events
                </li>
              </ul>
              <p>
                <strong>Questions or concerns?</strong> Reading this Privacy
                Notice will help you understand your privacy rights and choices.
                We are responsible for making decisions about how your personal
                information is processed. If you do not agree with our policies
                and practices, please do not use our Services. If you still have
                any questions or concerns, please contact us at {EMAIL_ADDRESS}.
              </p>
            </div>
          </section>

          <section>
            <h2 className='section-title'>SUMMARY OF KEY POINTS</h2>
            <div className='text'>
              <p>
                <strong>
                  This summary provides key points from our Privacy Notice, but
                  you can find out more details about any of these topics by
                  clicking the link following each key point or by using our{' '}
                  <a href='#table-of-contents'>table of contents</a> below to
                  find the section you are looking for.
                </strong>
              </p>
              <h3 className='section-subtitle'>
                What personal information do we process?
              </h3>
              <p>
                When you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with us and
                the Services, the choices you make, and the products and
                features you use. Learn more about{' '}
                <a href='#what-information'>
                  personal information you disclose to us
                </a>
                .
              </p>
              <h3 className='section-subtitle'>
                Do we process any sensitive personal information?
              </h3>
              <p>
                Some of the information may be considered "special" or
                "sensitive" in certain jurisdictions, for example your racial or
                ethnic origins, sexual orientation, and religious beliefs. We do
                not process sensitive personal information.
              </p>
              <h3 className='section-subtitle'>
                Do we collect any information from third parties?
              </h3>
              <p>We do not collect any information from third parties.</p>
              <h3 className='section-subtitle'>
                How do we process your information?
              </h3>
              <p>
                We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do
                so. Learn more about{' '}
                <a href='#how-we-process'>how we process your information</a>.
              </p>
              <h3 className='section-subtitle'>
                In what situations and with which parties do we share personal
                information?
              </h3>
              <p>
                We may share information in specific situations and with
                specific third parties. Learn more about{' '}
                <a href='#when-we-share'>
                  when and with whom we share your personal information
                </a>
                .
              </p>
              <h3 className='section-subtitle'>
                How do we keep your information safe?
              </h3>
              <p>
                We have adequate organizational and technical processes and
                procedures in place to protect your personal information.
                However, no electronic transmission over the internet or
                information storage technology can be guaranteed to be 100%
                secure, so we cannot promise or guarantee that hackers,
                cybercriminals, or other unauthorized third parties will not be
                able to defeat our security and improperly collect, access,
                steal, or modify your information. Learn more about{' '}
                <a href='#data-security'>how we keep your information safe</a>.
              </p>
              <h3 className='section-subtitle'>What are your rights?</h3>
              <p>
                Depending on where you are located geographically, the
                applicable privacy law may mean you have certain rights
                regarding your personal information. Learn more about{' '}
                <a href='#privacy-rights'>your privacy rights</a>.
              </p>
              <h3 className='section-subtitle'>
                How do you exercise your rights?
              </h3>
              <p>
                The easiest way to exercise your rights is by submitting a{' '}
                <a href='https://app.termly.io/notify/c19d9e16-c832-4131-a286-87f1d6cd8a70'>
                  data subject access request
                </a>
                , or by contacting us. We will consider and act upon any request
                in accordance with applicable data protection laws.
              </p>
              <p>
                Want to learn more about what we do with any information we
                collect?{' '}
                <a href='#table-of-contents'>
                  Review the Privacy Notice in full.
                </a>
              </p>
            </div>
          </section>

          <section id='table-of-contents'>
            <h2 className='section-title'>TABLE OF CONTENTS</h2>
            <div className='text'>
              <ul>
                <li>
                  <a href='#what-information'>
                    1. WHAT INFORMATION DO WE COLLECT?
                  </a>
                </li>
                <li>
                  <a href='#how-we-process'>
                    2. HOW DO WE PROCESS YOUR INFORMATION?
                  </a>
                </li>
                <li>
                  <a href='#when-we-share'>
                    3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </a>
                </li>
                <li>
                  <a href='#cookies-tracking'>
                    4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </a>
                </li>
                <li>
                  <a href='#data-retention'>
                    5. HOW LONG DO WE KEEP YOUR INFORMATION?
                  </a>
                </li>
                <li>
                  <a href='#data-security'>
                    6. HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </a>
                </li>
                <li>
                  <a href='#minors'>
                    7. DO WE COLLECT INFORMATION FROM MINORS?
                  </a>
                </li>
                <li>
                  <a href='#privacy-rights'>8. WHAT ARE YOUR PRIVACY RIGHTS?</a>
                </li>
                <li>
                  <a href='#do-not-track'>
                    9. CONTROLS FOR DO-NOT-TRACK FEATURES
                  </a>
                </li>
                <li>
                  <a href='#us-privacy-rights'>
                    10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </a>
                </li>
                <li>
                  <a href='#updates'>11. DO WE MAKE UPDATES TO THIS NOTICE?</a>
                </li>
                <li>
                  <a href='#contact'>
                    12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </a>
                </li>
                <li>
                  <a href='#review-data'>
                    13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                    COLLECT FROM YOU?
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section id='what-information'>
            <h2 className='section-title' id='what-information'>
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
            <div className='text'>
              <h3 className='section-subtitle'>
                Personal information you disclose to us
              </h3>
              <div className={styles.in_short}>
                We collect personal information that you provide to us.
              </div>
              <p>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Services, or otherwise when you contact us.
              </p>
              <p>
                <strong>Personal Information Provided by You.</strong> The
                personal information that we collect depends on the context of
                your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal
                information we collect may include the following:
              </p>
              <ul>
                <li>names</li>
                <li>phone numbers</li>
                <li>email addresses</li>
              </ul>
              <p>
                <strong>Sensitive Information.</strong> We do not process
                sensitive information.
              </p>
              <p>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </p>
              <h3 className='section-subtitle'>
                Information automatically collected
              </h3>
              <div className={styles.in_short}>
                Some information — such as your Internet Protocol (IP) address
                and/or browser and device characteristics — is collected
                automatically when you visit our Services.
              </div>
              <p>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes. The
                information we collect includes:
              </p>
              <ul>
                <li>
                  <p>
                    <em>Log and Usage Data</em>. Log and usage data is
                    service-related, diagnostic, usage, and performance
                    information our servers automatically collect when you
                    access or use our Services and which we record in log files.
                    Depending on how you interact with us, this log data may
                    include your IP address, device information, browser type,
                    and settings and information about your activity in the
                    Services(such as the date/time stamps associated with your
                    usage, pages and files viewed, searches, and other actions
                    you take such as which features you use), device event
                    information (such as system activity, error reports
                    (sometimes called "crash dumps"), and hardware settings).
                  </p>
                </li>
                <li>
                  <p>
                    <em>Device Data</em>. We collect device data such as
                    information about your computer, phone, tablet, or other
                    device you use to access the Services. Depending on the
                    device used, this device data may include information such
                    as your IP address (or proxy server), device and application
                    identification numbers, location, browser type, hardware
                    model, Internet service provider and/or mobile carrier,
                    operating system, and system configuration information.
                  </p>
                </li>
                <li>
                  <p>
                    <em>Location Data</em>. We collect location data such as
                    information about your device's location, which can be
                    either precise or imprecise. How much information we collect
                    depends on the type and settings of the device you use to
                    access the Services. For example, we may use GPS and other
                    technologies to collect geolocation data that tells us your
                    current location (based on your IP address). You can opt out
                    of allowing us to collect this information either by
                    refusing access to the information or by disabling your
                    Location setting on your device. However, if you choose to
                    opt out, you may not be able to use certain aspects of the
                    Services.
                  </p>
                </li>
              </ul>
              <h3 className='section-subtitle'>Google API</h3>
              <p>
                Our use of information received from Google APIs will adhere to{' '}
                <a href='https://developers.google.com/terms/api-services-user-data-policy'>
                  Google API Services User Data Policy
                </a>
                , including the{' '}
                <a href='https://developers.google.com/terms/api-services-user-data-policy#limited-use'>
                  Limited Use requirements.
                </a>
              </p>
            </div>
          </section>
          <section id='how-we-process'>
            <h2 className='section-title'>
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                We process your information to provide, improve, and administer
                our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your
                information for other purposes with your consent.
              </div>
              <p>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>
              <ul>
                <li>
                  <p>
                    To respond to user inquiries/offer support to users. We may
                    process your information to respond to your inquiries and
                    solve any potential issues you might have with the requested
                    service.
                  </p>
                </li>
                <li>
                  <p>
                    To send administrative information to you. We may process
                    your information to send you details about our products and
                    services, changes to our terms and policies, and other
                    similar information.
                  </p>
                </li>
                <li>
                  <p>
                    To fulfill and manage your orders. We may process your
                    information to fulfill and manage your orders, payments,
                    returns, and exchanges made through the Services.
                  </p>
                </li>
                <li>
                  <p>
                    To post testimonials. We post testimonials on our Services
                    that may contain personal information.
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <section id='when-we-share'>
            <h2 className='section-title'>
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                We may share information in specific situations described in
                this section and/or with the following third parties.
              </div>
              <p>
                We may need to share your personal information in the following
                situations:
                <ul>
                  <li>
                    <p>
                      Business Transfers. We may share or transfer your
                      information in connection with, or during negotiations of,
                      any merger, sale of company assets, financing, or
                      acquisition of all or a portion of our business to another
                      company.
                    </p>
                  </li>
                </ul>
              </p>
            </div>
          </section>
          <section id='cookies-tracking'>
            <h2 className='section-title'>
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                We may use cookies and other tracking technologies to collect
                and store your information.
              </div>
              <p>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to gather information when you interact with
                our Services. Some online tracking technologies help us maintain
                the security of our Services, prevent crashes, fix bugs, save
                your preferences, and assist with basic site functions.
              </p>
              <p>
                We also permit third parties and service providers to use online
                tracking technologies on our Services for analytics and
                advertising, including to help manage and display
                advertisements, to tailor advertisements to your interests, or
                to send abandoned shopping cart reminders (depending on your
                communication preferences). The third parties and service
                providers use their technology to provide advertising about
                products and services tailored to your interests which may
                appear either on our Services or on other websites.
              </p>
              <p>
                To the extent these online tracking technologies are deemed to
                be a "sale"/"sharing" (which includes targeted advertising, as
                defined under the applicable laws) under applicable US state
                laws, you can opt out of these online tracking technologies by
                submitting a request as described below under section{' '}
                <a href='#us-privacy-rights'>
                  DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </a>
              </p>
              <p>
                Specific information about how we use such technologies and how
                you can refuse certain cookies is set out in our Cookie Notice.
              </p>
              <h3 className='section-subtitle'>Google Analytics</h3>
              <p>
                We may share your information with Google Analytics to track and
                analyze the use of the Services. The Google Analytics
                Advertising Features that we may use include: Google Analytics
                Demographics and Interests Reporting. To opt out of being
                tracked by Google Analytics across the Services, visit
                <a href='https://tools.google.com/dlpage/gaoptout'>
                  https://tools.google.com/dlpage/gaoptout
                </a>
                . You can opt out of Google Analytics Advertising Features
                through Ads Settings and{' '}
                <a href='https://myadcenter.google.com/personalizationoff?sasb=true&ref=ad-settings'>
                  Ad Settings
                </a>{' '}
                for mobile apps. Other opt out means include{' '}
                <a href='http://optout.networkadvertising.org/'>
                  http://optout.networkadvertising.org/
                </a>{' '}
                <a href='http://www.networkadvertising.org/mobile-choice'>
                  http://www.networkadvertising.org/mobile-choice
                </a>{' '}
                . For more information on the privacy practices of Google,
                please visit the{' '}
                <a href='https://policies.google.com/privacy'>
                  Google Privacy & Terms page.
                </a>
              </p>
            </div>
          </section>
          <section id='data-retention'>
            <h2 className='section-title'>
              5. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                We keep your information for as long as necessary to fulfill the
                purposes outlined in this Privacy Notice unless otherwise
                required by law.
              </div>
              <p>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this Privacy Notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements).
              </p>
              <p>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </div>
          </section>

          <section id='data-security'>
            <h2 className='section-title'>
              6. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                We aim to protect your personal information through a system of
                organizational and technical security measures.
              </div>
              <p>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </p>
            </div>
          </section>

          <section id='minors'>
            <h2 className='section-title'>
              7. DO WE COLLECT INFORMATION FROM MINORS?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                We do not knowingly collect data from or market to children
                under 18 years of age.
              </div>
              <p>
                We do not knowingly collect, solicit data from, or market to
                children under 18 years of age, nor do we knowingly sell such
                personal information. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at
                {EMAIL_ADDRESS}.
              </p>
            </div>
          </section>

          <section id='privacy-rights'>
            <h2 className='section-title'>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <div className='text'>
              <div className={styles.in_short}>
                You may review, change, or terminate your account at any time,
                depending on your country, province, or state of residence.
              </div>
              <p>
                <strong>Withdrawing your consent:</strong> If we are relying on
                your consent to process your personal information, which may be
                express and/or implied consent depending on the applicable law,
                you have the right to withdraw your consent at any time. You can
                withdraw your consent at any time by contacting us by using the
                contact details provided in the section{' '}
                <a href='#contact'>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>{' '}
                below.
              </p>
              <p>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </p>
              <p>
                If you have questions or comments about your privacy rights, you
                may email us at {EMAIL_ADDRESS}.
              </p>
            </div>
          </section>

          <section id='do-not-track'>
            <h2 className='section-title'>
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </h2>
            <div className='text'>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage, no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this Privacy Notice.
              </p>
              <p>
                California law requires us to let you know how we respond to web
                browser DNT signals. Because there currently is not an industry
                or legal standard for recognizing or honoring DNT signals, we do
                not respond to them at this time.
              </p>
            </div>
          </section>

          <section id='us-privacy-rights'>
            <h2 className='section-title'>
              10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                If you are a resident of California, Colorado, Connecticut,
                Delaware, Florida, Indiana, Iowa, Kentucky, Minnesota, Montana,
                Nebraska, New Hampshire, New Jersey, Oregon, Tennessee, Texas,
                Utah, or Virginia, you may have the right to request access to
                and receive details about the personal information we maintain
                about you and how we have processed it, correct inaccuracies,
                get a copy of, or delete your personal information. You may also
                have the right to withdraw your consent to our processing of
                your personal information. These rights may be limited in some
                circumstances by applicable law. More information is provided
                below.
              </div>
              <h3 className='section-subtitle'>
                Categories of Personal Information We Collect
              </h3>
              <p>
                We have collected the following categories of personal
                information in the past twelve (12) months:
              </p>
              <table
                border={1}
                cellPadding='10'
                style={{ borderCollapse: 'collapse', width: '100%' }}
              >
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Examples</th>
                    <th>Collected</th>
                  </tr>
                </thead>
                <tbody>
                  {personalInformationCollectedData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.category}</td>
                      <td>{item.examples}</td>
                      <td>{item.collected}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                We may also collect other personal information outside of these
                categories through instances where you interact with us in
                person, online, or by phone or mail in the context of:
              </p>
              <ul>
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests;</li>
                <li>
                  Facilitation in the delivery of our Services and to respond to
                  your inquiries.
                </li>
              </ul>
              <p>
                We will use and retain the collected personal information as
                needed to provide the Services or for:
              </p>
              <ul>
                <li>
                  <p>Category H - As long as the user has an account with us</p>
                </li>
              </ul>

              <h3 className='section-subtitle'>
                Sources of Personal Information
              </h3>
              <p>
                Learn more about the sources of personal information we collect
                in{' '}
                <a href='#what-information'>WHAT INFORMATION DO WE COLLECT?</a>
              </p>

              <h3 className='section-subtitle'>
                How We Use and Share Personal Information
              </h3>
              <p>
                Learn more about how we use your personal information in the
                section,
                <a href='#how-we-process'>
                  {' '}
                  HOW DO WE PROCESS YOUR INFORMATION?
                </a>
              </p>

              <h3 className='section-subtitle'>
                Will your information be shared with anyone else?
              </h3>
              <p>
                We may disclose your personal information with our service
                providers pursuant to a written contract between us and each
                service provider. Learn more about how we disclose personal
                information to in the section,
                <a href='#when-and-with-whom'>
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
              </p>
              <p>
                We may use your personal information for our own business
                purposes, such as for undertaking internal research for
                technological development and demonstration. This is not
                considered to be "selling" of your personal information.
              </p>
              <p>
                We have not disclosed, sold, or shared any personal information
                to third parties for a business or commercial purpose in the
                preceding twelve (12) months. Wewill not sell or share personal
                information in the future belonging to website visitors, users,
                and other consumers.
              </p>
              <h3 className='section-subtitle'>Your Rights</h3>
              <p>
                You have rights under certain US state data protection laws.
                However, these rights are not absolute, and in certain cases, we
                may decline your request as permitted by law. These rights
                include:
              </p>
              <ul>
                <li>
                  <strong>Right to know</strong> whether or not we are
                  processing your personal data
                </li>
                <li>
                  <strong>Right to access</strong> your personal data
                </li>
                <li>
                  <strong>Right to correct</strong> inaccuracies in your
                  personal data
                </li>
                <li>
                  <strong>Right to request the deletion</strong> of your
                  personal data
                </li>
                <li>
                  <strong>Right to obtain a copy</strong> of the personal data
                  you previously shared with us
                </li>
                <li>
                  <strong>Right to non-discrimination</strong> for exercising
                  your rights
                </li>
                <li>
                  <strong>Right to opt out</strong> of the processing of your
                  personal data if it is used for targeted advertising (or
                  sharing as defined under California’s privacy law), the sale
                  of personal data, or profiling in furtherance of decisions
                  that produce legal or similarly significant effects
                  ("profiling")
                </li>
              </ul>
              <p>
                Depending upon the state where you live, you may also have the
                following rights:
              </p>
              <ul>
                <li>
                  <strong>Right to access</strong> the categories of personal
                  data being processed (as permitted by applicable law,
                  including Minnesota’s privacy law)
                </li>
                <li>
                  <strong>Right to obtain</strong> a list of the categories of
                  third parties to which we have disclosed personal data (as
                  permitted by applicable law, including California's and
                  Delaware's privacy law)
                </li>
                <li>
                  <strong>Right to obtain</strong> a list of specific third
                  parties to which we have disclosed personal data (as permitted
                  by applicable law, including Minnesota's and Oregon's privacy
                  law)
                </li>
                <li>
                  <strong>
                    Right to review, understand, question, and correct
                  </strong>{' '}
                  how personal data has been profiled (as permitted by
                  applicable law, including Minnesota’s privacy law)
                </li>
                <li>
                  <strong>Right to limit</strong> use and disclosure of
                  sensitive personal data (as permitted by applicable law,
                  including California’s privacy law)
                </li>
                <li>
                  <strong>Right to opt out</strong> of the collection of
                  sensitive data and personal data collected through the
                  operation of a voice or facial recognition feature (as
                  permitted by applicable law, including Florida’s privacy law)
                </li>
              </ul>
              <h3 className='section-subtitle'>How to Exercise Your Rights</h3>
              <p>
                To exercise these rights, you can contact us by submitting a{' '}
                <a href='https://app.termly.io/notify/c19d9e16-c832-4131-a286-87f1d6cd8a70'>
                  data subject access request
                </a>
                , by emailing us at {EMAIL_ADDRESS}, or by referring to the
                contact details at the bottom of this document.
              </p>
              <p>
                Under certain US state data protection laws, you can designate
                an authorized agent to make a request on your behalf. We may
                deny a request from an authorized agent that does not submit
                proof that they have been validly authorized to act on your
                behalf in accordance with applicable laws.
              </p>
              <h3 className='section-subtitle'>Request Verification</h3>
              <p>
                Upon receiving your request, we will need to verify your
                identity to determine you are the same person about whom we have
                the information in our system. We will only use personal
                information provided in your request to verify your identity or
                authority to make the request. However, if we cannot verify your
                identity from the information already maintained by us, we may
                request that you provide additional information for the purposes
                of verifying your identity and for security or fraud-prevention
                purposes.
              </p>
              <p>
                If you submit the request through an authorized agent, we may
                need to collect additional information to verify your identity
                before processing your request and the agent will need to
                provide a written and signed permission from you to submit such
                request on your behalf.
              </p>
              <h3 className='section-subtitle'>Appeals</h3>
              <p>
                Under certain US state data protection laws, if we decline to
                take action regarding your request, you may appeal our decision
                by emailing us at {EMAIL_ADDRESS}. We will inform you in writing
                of any action taken or not taken in response to the appeal,
                including a written explanation of the reasons for the
                decisions. If your appeal is denied, you may submit a complaint
                to your state attorney general.
              </p>
              <h3 className='section-subtitle'>
                California "Shine The Light" Law
              </h3>
              <p>
                California Civil Code Section 1798.83, also known as the "Shine
                The Light" law, permits our users who are California residents
                to request and obtain from us, once a year and free of charge,
                information about categories of personal information (if any) we
                disclosed to third parties for direct marketing purposes and the
                names and addresses of all third parties with which we shared
                personal information in the immediately preceding calendar year.
                If you are a California resident and would like to make such a
                request, please submit your request in writing to us by using
                the contact details provided in the section{' '}
                <a href='#contact'>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
              </p>
            </div>
          </section>

          <section id='updates'>
            <h2 className='section-title'>
              11. DO WE MAKE UPDATES TO THIS NOTICE?
            </h2>
            <div className='text'>
              <div className={styles.in_short}>
                Yes, we will update this notice as necessary to stay compliant
                with relevant laws.
              </div>
              <p>
                We may update this Privacy Notice from time to time. The updated
                version will be indicated by an updated "Revised" date at the
                top of this Privacy Notice. If we make material changes to this
                Privacy Notice, we may notify you either by prominently posting
                a notice of such changes or by directly sending you a
                notification. We encourage you to review this Privacy Notice
                frequently to be informed of how we are protecting your
                information.
              </p>
            </div>
          </section>

          <section id='contact'>
            <h2 className='section-title'>
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <div className='text'>
              <p>
                If you have questions or comments about this notice, you may
                email us at {EMAIL_ADDRESS} or contact us by post at:
              </p>
              <p>
                {LEGAL_NAME}
                <br />
                {ADDRESS},
                <br />
                {CITY}, {STATE}, {ZIP_CODE}
                <br />
                {COUNTRY}
              </p>
            </div>
          </section>

          <section id='review-data'>
            <h2 className='section-title'>
              13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </h2>
            <div className='text'>
              <p>
                Based on the applicable laws of your country or state of
                residence in the US, you may have the right to request access to
                the personal information we collect from you, details about how
                we have processed it, correct inaccuracies, or delete your
                personal information. You may also have the right to withdraw
                your consent to our processing of your personal information.
                These rights may be limited in some circumstances by applicable
                law. To request to review, update, or delete your personal
                information, please fill out and submit a data subject access
                request.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
