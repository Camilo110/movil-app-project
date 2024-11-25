import { SERVER_URL } from '../config'
export const getInsumo = async () => {
  const resp = await fetch(`${SERVER_URL}/insumo`)
  const {body} = await resp.json()
  return body
}

export const getInsumoById = async (id) => {
  const resp = await fetch(`${SERVER_URL}/insumo/${id}`)
  const {body} = await resp.json()
  return body
}

export const createInsumo = async (data) => {
  const resp = await fetch(`${SERVER_URL}/insumo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const {body} = await resp.json()
  return body
}

export const updateInsumo = async (id, data) => {
  const resp = await fetch(`${SERVER_URL}/insumo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const {body} = await resp.json()
  return body
}