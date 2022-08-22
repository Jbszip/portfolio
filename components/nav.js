import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 border-white nav">
      <div className="container flex flex-wrap justify-center items-center mx-auto">
        <ul className="flex px-0 py-4 mt-0 space-x-2 sm:space-x-4 flex-row md:space-x-8 md:text-md font-medium ">
          <li className="font-bold italic hover:text-blue-500">
            <Link href="/" className="block py-2 pr-4 pl-3 rounded md:p-0">
              Inicio
            </Link>
          </li>
          <li className="font-bold italic hover:text-blue-500">
            <Link
              href="/perfil"
              className="block py-2 pr-4 pl-3 rounded md:p-0"
            >
              Perfil
            </Link>
          </li>
          <li className="font-bold italic hover:text-blue-500">
            <Link
              href="/proyectos"
              className="block py-2 pr-4 pl-3 rounded md:p-0"
            >
              Proyectos
            </Link>
          </li>
          <li className="font-bold italic hover:text-blue-500">
            <Link
              href="/contacto"
              className="block py-2 pr-4 pl-3 rounded md:p-0"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
