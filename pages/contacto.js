import Head from "next/head";
import Contact from "../components/contactComponent";
import Footer from "../components/footer";
import Navbar from "../components/nav";


export default function Contacto() {
    return (
        <>
            <Head>
                <title>Contacto - JBS</title>
                <meta name="description" content="Contacto personal" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="min-h-screen">
                <Contact />
            </main>
            <Footer />
        </>
    )
}