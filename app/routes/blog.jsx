import { useLoaderData } from '@remix-run/react';
import Post from '~/components/post';
import styles from '~/styles/blog.css'
import { getPosts } from '~/models/post.server'

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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post
            post={post.attributes}
            key={post.id} 
          />))  
        } 
      </div>
    </main>
)
}

export default Blog