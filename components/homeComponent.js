import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ProyectoList from '../components/proyectoList'
import ToolsList from '../components/toolsList'
import Contact from './contactComponent'

export default function Home() {
  return (
      <main className={styles.main}>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="mx-4 lg:mx-10">
              <h1 className="text-3xl font-bold uppercase tracking-wide text-center lg:text-5xl">
                Juan Bautista Solari
              </h1>
              <h3 className="text-l font-bold tracking-wide text-center italic lg:text-2xl">
                Fullstack Developer
              </h3>
              <div className="mt-8 space-y-5 text-center">
                <p className="items-center mx-2 text-center">
                  <span>¿Quién soy?</span> Joven estudiante proactivo, con conocimientos de desarrollo web, autodidacta y entusiasta.
                </p>
                <button className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium rounded text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"><Link href="/perfil">Explora mi perfil</Link></button>
              </div>
          </div>
          <div className= "h-54 lg:h-96 lg:max-w-lg mx-auto">
            <img className="h-48 md:h-64 lg:h-96 rounded-md " src="/profile.png" alt="Imagen de perfil" />
          </div>
        </div>
        <ProyectoList />
        <ToolsList />
        <Contact id="contacto"/>
      </main>

  )
}
