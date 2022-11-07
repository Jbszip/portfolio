import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/nav";
import proyectos from "../../data/proyectos.json";

export default function Contactame() {
  console.log(proyectos.proyectos[2]);
  return (
    <>
      <Head>
        <title>Proyecto Giffear - JBS</title>
        <meta name="description" content="Proyecto Giffear" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2 xl:mx-2 ">
            <img
              className="xl:w-[700px] sm:w-[28rem] sm:h-[20rem] md:w-[600px] flex-shrink-0 rounded"
              src={proyectos.proyectos[2].imagen}
              alt="Giffear"
            />
          </div>

          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h1 className="text-3xl font-bold uppercase tracking-tight xl:text-4xl text-white hover:text-blue-500">
              {proyectos.proyectos[2].title}
            </h1>
            <h3 className="text-l font-bold tracking-wide text-blue-500 lg:text-2xl">
              {proyectos.proyectos[2].type}
            </h3>

            <p className="block max-w-2xl mt-4 text-xl text-white">
              {proyectos.proyectos[2].description}
            </p>

            <div className="mt-6 sm:-mx-2">
              <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                <a
                  href="https://github.com/Jbszip/ContactaME"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  <span className="mx-2">Visita Github</span>
                </a>
              </div>

              <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                <a
                  href="https://contacta-me.vercel.app/"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span className="mx-2">Visita la web</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold uppercase text-center text-xl max-w-xs pb-1 mx-auto mt-2 border-b-2 border-blue-600">
            Herramientas utilizadas
          </h3>
          <div className="my-8">
            <ul className="flex flex-row gap-8 content-center justify-center mx-auto">
            <li><div className="flex flex-wrap items-center justify-center px-2 py-1 rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900"><p className='items-center justify-center font-semibold px-1'>HTML</p><Image className="px-1 rounded" src="/html.svg" alt="HTML5" width={50} height={50}/></div></li>
              <li><div className="flex flex-wrap items-center justify-center px-2 py-1 rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900"><p className='items-center justify-center font-semibold px-1'>CSS</p><Image className="px-1 rounded" src="/css.svg" alt="CSS" width={50} height={50}/></div></li>
              <li><div className="flex flex-wrap items-center justify-center px-2 py-1 rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900"><p className='items-center justify-center font-semibold px-1'>JavaScript</p><Image className="px-1 rounded" src="/js.svg" alt="JavaScript" width={50} height={50}/></div></li>
              <li><div className="flex flex-wrap items-center justify-center px-2 py-1 rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900"><p className='items-center justify-center font-semibold px-1'>Git</p><Image className="px-1 rounded" src="/git.svg" alt="Git" width={50} height={50}/></div></li>
              <li><div className="flex flex-wrap items-center justify-center px-2 py-1 rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900"><p className='items-center justify-center font-semibold px-1'>NextJs</p><Image className="px-1 rounded" src="/next.svg" alt="NextJs" width={50} height={50}/></div></li>
              <li><div className="flex flex-wrap items-center justify-center px-2 py-1 rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900"><p className='items-center justify-center font-semibold px-1'>Tailwind</p><Image className="px-1 rounded" src="/tailwind.svg" alt="TailwindCSS" width={50} height={50}/></div></li>
            </ul>
          </div>
          <div className="text-center my-2">
          <h3 className="font-bold uppercase text-xl max-w-xs pb-1 mx-auto mt-2 mb-4 border-b-2 border-blue-600">
            Datos de Web Performance
          </h3>
          <Image src="/contactamewp.png" alt="Web performance data" height={350} width={650}/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
