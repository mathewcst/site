import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matheus Costa</title>
      </Head>
      <main role='main' className={styles.content}>
        <section className={styles.view}>
          <div className={styles.social}>
            <h1 className={styles.title}>
              Hello there,
              <br />
              I'm <strong>Mathew Costa</strong>
            </h1>
            <ul className={styles.links}>
              <li>
                <a
                  href='https://github.com/mathewcst'
                  title='GitHub'
                  target='_blank'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href='https://twitch.tv/mathewcst'
                  title='Twitch'
                  target='_blank'>
                  <FontAwesomeIcon icon={faTwitch} />
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/mathewcst'
                  title='Twitter'
                  target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href='mailto:eu@mathewcosta.com'
                  title='Email'
                  target='_blank'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
            <h2 className={styles.subtitle}>freelancer developer & designer</h2>
          </div>

          <div className={styles.avatar}>
            <img src='./Avatar_3.png' />
          </div>
        </section>
      </main>
    </div>
  )
}
