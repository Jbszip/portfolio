import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import HomeComponent from '../components/homeComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>JBS - Portfolio</title>
        <meta name="description" content="Portfolio personal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <HomeComponent />
        <Footer />
      </div>
    </>
  )
}
