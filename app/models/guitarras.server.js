export async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/tienda-guitarras?populate=imagen`)
    const resultado = await respuesta.json()
    return await resultado
}
export async function getGuitarra(url){
  const respuesta = await fetch(`${process.env.API_URL}/tienda-guitarras?filters[url]=${url}&populate=imagen`)
  return await respuesta.json()
}