 export const getAllParaInseminar = async () => {
  const resp = await fetch('http://localhost:4000/paraInseminar')
  if (resp.status === 200) {
    const {body} = await resp.json()
    return body
  }
  return []
}

export const getParaInseminarbyId = async (id) => {
  const resp = await fetch(`http://localhost:4000/paraInseminar/${id}`)
  if (resp.status === 200) {
    const {body} = await resp.json()
    return body
  }
  return []
}

export const getParaInseminarSugeridos = async () => {
  const resp = await fetch(`http://localhost:4000/paraInseminar/sugeridos`)
  if (resp.status === 200) {
    const {body} = await resp.json()
    return body
  }
  return []
}


export const createParaInseminar = async (paraInseminar) => {
  const resp = await fetch('http://localhost:4000/paraInseminar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paraInseminar)
  })
  const {body} = await resp.json()
  return body
}

export const updateParaInseminar = async (id) => {
  const resp = await fetch(`http://localhost:4000/paraInseminar/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const {body} = await resp.json()
  return body
}