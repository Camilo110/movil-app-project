
export async function getProductos(){
  const response = await fetch('http://localhost:4000/producto')
  const {body} = await response.json()
  return body
}