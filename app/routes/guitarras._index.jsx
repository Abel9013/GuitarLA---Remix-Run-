import { useLoaderData, useOutletContext, Outlet } from '@remix-run/react'
// import {  } from '@remix-run/react'
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from '~/components/listadoGuitarras'
import styles from '~/styles/guitarras.css'
export function meta(){
  return[
  {
    title:'GuitarLA - Tienda de Guitarras',
  },
  {
    description: 'GuitarLA - Nuestra coleccion de guitarras'
  }
  ]
}
export function links() {
  return[
    {
      rel:'stylesheet',
      href:styles
    }

  ]
}
export async function loader() {
  const guitarras = await getGuitarras()
  // console.log(guitarras);
  return guitarras.data
}

function Tienda() {
  const data = useOutletContext()
  const guitarras = useLoaderData()
  return (
    <main className='contenedor' >
     <ListadoGuitarras guitarras={guitarras} /> 
     <Outlet />
    </main>
  )
}

export default Tienda