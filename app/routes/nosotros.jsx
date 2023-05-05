import styles from '~/styles/nosotros.css'
import imagen from '../../public/img/nosotros.jpg'

export function meta(){
  return(
      [
          {
              title: 'GuitarLA - Nosotros',
              description: "Venta de guitarras, blog de música"
          }
      ]
  )
}
export function links (){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }, 
    {
      rel: "preload",
      href: imagen,
      as: 'image'
    }
  ]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt='Imagen sobre nosotros' />
        <div>
          <p>
          Bienvenidos a GuitarLA, una empresa dedicada a proveer a nuestros clientes las mejores guitarras eléctricas del mercado. Desde nuestros inicios, nuestro objetivo ha sido brindar instrumentos de alta calidad y el mejor servicio al cliente.
          </p>
          <p>

          En GuitarLA, nos esforzamos por brindar una amplia variedad de opciones para todos los niveles de habilidad y presupuestos. Desde guitarras de nivel de entrada hasta modelos de alta gama, nuestro catálogo ofrece una gran selección de marcas y modelos para satisfacer las necesidades de cada músico.
          </p>
          <p>
          Nuestro compromiso con la excelencia no se limita a nuestros productos. En GuitarLA, entendemos la importancia de un servicio al cliente excepcional, y nuestro equipo de expertos está siempre a disposición para ayudar en cualquier consulta que pueda tener. Nos aseguramos de que cada cliente se sienta apoyado y cuidado durante todo el proceso de compra.
          </p>
          <p>
          En resumen, en GuitarLA estamos comprometidos con proporcionar a nuestros clientes las mejores guitarras eléctricas del mercado, junto con un servicio al cliente excepcional. No dude en contactarnos para obtener más información o para programar una visita a nuestra tienda. ¡Esperamos ser su tienda de música de confianza!
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros