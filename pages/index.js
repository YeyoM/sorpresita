import Link from 'next/link'
import classes from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={classes.main}>
      <Head>
        <title>Doxeo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
        <link rel="icon" href="/cum.svg" />
      </Head>
      <Link href="/sorpresa">Click aqui para doxeo</Link>
    </div>
  )
}
