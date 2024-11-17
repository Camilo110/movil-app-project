import { SERVER_URL } from "../config"
export const getProduccion = async () => {
  const resp = await fetch(`${SERVER_URL}/produccionindividual`)
  const {body} = await resp.json()
  return body
}

export const CreateProduccionIndividual = async (data) => {

  const resp = await fetch(`${SERVER_URL}/produccionindividual`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
  
  const {body} = await resp.json()
  return body
}

export const EditProduccionIndividual = async (data, id) => {
  const resp = await fetch(`${SERVER_URL}/produccionindividual/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const {body} = await resp.json()
  return body
}

export const DeleteProduccionIndividual = async (id) => {
  const resp = await fetch(`${SERVER_URL}/produccionindividual/${id}`, {
    method: 'DELETE'
  })

  const {body} = await resp.json()
  return body
}