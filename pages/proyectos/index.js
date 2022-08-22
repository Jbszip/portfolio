import Head from 'next/head'
import Footer from "../../components/footer";
import Navbar from "../../components/nav";
import ProyectoList from "../../components/proyectoList";


export default function Proyectos() {
    return (
        <>
            <Head>
                <title>Proyectos - JBS</title>
                <meta name="description" content="Proyectos de mi portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className='min-h-screen'>
                <ProyectoList />
            </main>
            <Footer />
        </>
    )
}