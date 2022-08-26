import { useState, useEffect } from 'react'
import Image from 'next/image'
import tools from '../data/tools.json'

const lista = []
export default function ToolsList() {
    const [state, setState] = useState(tools.tools)
    useEffect(() => {
        state.map((res)=>{
            lista.push(res)
        })
    })

    return (
        <>
            <h3 className="font-bold uppercase text-center content-center justify-center text-2xl max-w-xs pb-1 mx-auto mt-2 border-b-2 border-blue-600">Tecnologías</h3>
            <div className="flex flex-wrap mx-auto gap-5 mt-8 justify-center">
            {
                state.map(({id, imagen, name})=><div key={id} className="flex flex-wrap items-center justify-center px-2 py-1 rounded transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"><p className='items-center justify-center font-semibold px-1'>{name}</p><Image className="px-1" src={imagen} alt={name} width={35} height={35}/></div>)
            }
        </div>
        </>
        
    )
}