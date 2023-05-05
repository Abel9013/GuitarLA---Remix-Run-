import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'
export function meta({data}){
  if(!data){
      return[
        {
          title: `GuitarLA - Guitarra no encontrada`,
        },
        {
          description: `Guitarras, venta de guitarras, guitarra no encontrada}`
        }
    ]
  }
  return[
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    },
    {
      description: `Guitarras, venta de guitarras,${data.data[0].attributes.nombre}`
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
export async function loader ({params}){

  const { guitarraUrl } = params
 
  const guitarra = await getGuitarra(guitarraUrl)

  // Si no se encuentra la guitarra lanzamos un error
  if(guitarra.data.length === 0){
      throw new Response('',{
        status: 404,
        statusText: 'Guitarra no Encontrada'
      })
  }
  return guitarra
}
function Guitarra() {
  const guitarra = useLoaderData()
  const { descripcion, imagen, precio, nombre } = guitarra.data[0].attributes
  // console.log(guitarra);
  return (
    <main className='contenedor guitarra'>
        <img className='imagen' src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} />
        <div className="contenido">
        <h3>{nombre}</h3>
              <p className="texto">{descripcion}</p>
              <p className="precio" >${precio}</p>
        </div>
    </main>
  )
}

export default Guitarra