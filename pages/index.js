import { useState } from 'react'
import Draggable from 'react-draggable'
import Head from 'next/head'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

import styles from '../styles/Home.module.css'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Home() {
  const [position, setPosition] = useState('0.95')

  const codeString = `import { useState } from 'react'
import Draggable from 'react-draggable'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [position, setPosition] = useState('95%')

  const codeString = '(num) => num + 1'

  const handleDrag = (ev, data) => {
    const windowHeight = window.innerHeight
    const yPos = data.deltaY + data.y

    const percentageToCalc = 0.95

    const finalPos =
      ((windowHeight * percentageToCalc + yPos) / windowHeight) * 100

    setPosition(finalPos + '%')
  }

  const viewWidth = {
    height: position,
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mathew Costa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main role='main' className={styles.content}>
        <Draggable axis='y' bounds='parent' onDrag={handleDrag}>
          <div className={styles.slider}>a</div>
        </Draggable>

        <section className={styles.view} style={viewWidth}>
          <h2 className={styles.title}>I'm View</h2>
        </section>

        <section className={styles.code}>
          <SyntaxHighlighter
            language='javascript'
            style={materialDark}></SyntaxHighlighter>
        </section>
      </main>
    </div>
  )
}
`

  // const handleDrag = (ev, data) => {
  //   const windowHeight = window.innerHeight
  //   const yPos = data.deltaY + data.y

  //   const percentageToCalc = 0.95

  //   const finalPos = (windowHeight * percentageToCalc + yPos) / windowHeight

  //   setPosition(finalPos)
  // }

  // const viewWidth = {
  //   transform: `scaleY(${position})`,
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mathew Costa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main role='main' className={styles.content}>
        <Draggable axis='y'>
          {/* <div className={styles.slider}></div> */}

          <section className={styles.view}>
            <h2 className={styles.title}>I'm View</h2>
          </section>
        </Draggable>

        <section className={styles.code}>
          <SyntaxHighlighter
            language='jsx'
            style={materialDark}
            showLineNumbers={true}>
            {codeString}
          </SyntaxHighlighter>
        </section>
      </main>
    </div>
  )
}
