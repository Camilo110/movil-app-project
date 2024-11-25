import { SERVER_URL } from '../config'

export const getAllTransaccion = async () => {
  const resp = await fetch(`${SERVER_URL}/transaccion`)
  const { body } = await resp.json()
  return body
}

export const getResumen = async () => {
  const resp = await fetch(`${SERVER_URL}/transaccion/resumen`)
  const { body } = await resp.json()
  return body
}

export const getTransaccionById = async (id) => {
  const resp = await fetch(`${SERVER_URL}/transaccion/${id}`)
  const { body } = await resp.json()
  return body
} 

export const createTransaccion = async (data) => {
  const resp = await fetch(`${SERVER_URL}/transaccion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const { body } = await resp.json()
  return body
}