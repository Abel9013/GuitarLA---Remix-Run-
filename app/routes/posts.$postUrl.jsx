import styles from '~/styles/blog.css'
import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/post.server'
import { formatearFecha } from '~/utils/helper'
export function links() {
  return[
    {
      rel:'stylesheet',
      href:styles
    }

  ]
}
export function meta({data}){
  if(!data){
      return[
        {
          title: `GuitarLA - Post no encontrado`,
        },
        {
          description: `Guitarras, venta de guitarras,post no encontrado}`
        }
    ]
  }
  return[
    {
      title: `GuitarLA - ${data?.data[0].attributes.titulo}`,
    },
    {
      description: `Guitarras, venta de guitarras,${data.data[0].attributes.titulo}`
    }
]
}
export async function loader ({params}){

    const { postUrl } = params
    const post = await getPost(postUrl)
    // Si no se encuentra el post lanzamos un error
    if(post.data.length === 0){
        throw new Response('',{
          status: 404,
          statusText: 'Post no encontrado'
        })
    }
    return post
  }

function Post() {
    const post = useLoaderData()
    const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes
    return(
      <article className='contenedor post mt-3'>
        <img src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
      </article>
    )
}

export default Post