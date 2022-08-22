import Link from "next/link"

export default function ProyectoCard({ title, type, desc, imagen, detail, visita}) {

    return (
        <div className="max-w-xl max-h-[30rem] mx-auto my-2 p-2 overflow-hidden rounded-lg shadow-md nav">
            <img className="object-cover w-full h-64 rounded" lazy-load src={imagen} alt="Article" />
            <div className="p-6">
                <div>
                    <span className="text-xs text-blue-800 font-semibold uppercase">{type}</span>
                    <a href={detail} className="block mt-1 text-2xl font-bold uppercase italic transition-colors duration-200 transform hover:text-blue-500 hover:underline">{title}</a>
                    <p className="mt-1 text-sm line-clamp">{desc}</p>
                </div>

                <div className="mt-2">
                    <div className="flex items-center">
                        <Link href={detail}><button className="inline-flex items-center justify-center w-full mx-2 px-4 py-2 text-white text-base font-medium rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">Ver más</button></Link>
                        <Link href={visita}><button className="inline-flex items-center justify-center w-full mx-2 px-4 py-2 text-white text-base font-medium rounded bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">Visitar</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}