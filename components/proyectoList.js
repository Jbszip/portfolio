import { useState, useEffect } from "react";
import ProyectoCard from "./proyectoCard";
import proyectos from "../data/proyectos.json";

const lista = [];
export default function ProyectoList() {
  const [state, setState] = useState(proyectos.proyectos);
  useEffect(() => {
    state.map((res) => {
      lista.push(res);
    });
  });

  return (
    <section className="overflow-hidden mt-2 pb-2">
      <h3 className="font-bold uppercase text-center text-2xl max-w-xs pb-1 mx-auto my-4 border-b-2 border-blue-600">
        Proyectos
      </h3>
      <p className="my-4 mx-5 text-xl text-center text-white">
        En la siguiente lista puedes encontrar una serie de proyectos
        desarrollados por mí a manera de aprendendizaje de las herramientas y
        aplicación de mis conocimientos. Cada uno contiene una breve descripción
        que especifica su funcionamiento y sus alcances. También se describen
        las herramientas utilizadas y datos sobre la Performance de cada uno de
        los sitios ya desplegados.
      </p>
      <div className="container mx-auto lg:px-32 flex flex-wrap gap-8">
        {state.map(
          ({ id, title, description, imagen, tools, detail, visita, type }) => (
            <ProyectoCard
              key={id}
              title={title}
              desc={description}
              imagen={imagen}
              tools={tools}
              detail={detail}
              visita={visita}
              type={type}
            />
          )
        )}
      </div>
    </section>
  );
}
