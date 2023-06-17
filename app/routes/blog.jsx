import { useLoaderData } from '@remix-run/react';
import styles from '~/styles/blog.css'
import { getPosts } from '~/models/post.server'
import ListadoPosts from '~/components/listadoPosts';

export function meta() {
  return(
    [
      {
          // charset: 'utf-8',
          title: 'GuitarLA - Nuestro Blog'
          // viewport: 'width=device-width,initial-scale=1'
      },
      {
        description: 'GuitarLA - Blog de musica y venta de guitarras'
      }
  ]
  )
}
export function links() {
  return[
    {
      rel:'stylesheet',
      href:styles
    }

  ]
}
export async function loader(){
  const posts = await getPosts()
  return posts.data
}
function Blog() {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
)
}

export default Blog