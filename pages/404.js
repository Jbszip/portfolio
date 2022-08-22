import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'


export default function Error(){
    return(
        <>
            <Head>
            <title>Error 404</title>
        <meta name="description" content="Error 404" />
        <link rel="icon" href="/error.ico" />
            </Head>
            <Navbar />
            <main className='min-h-screen'>
                <div className='flex flex-col my-8 items-center'>
                    <Image src="/404.svg" alt="asd" width={500} height={500}/>
                    <Link href="/"><button className='w-48 rounded px-5 py-3 text-base font-semibold uppercase italic text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600'>Vuelve al inicio</button></Link>
                </div>
            </main>
            <Footer />
        </>
    )
}