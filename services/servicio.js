import { SERVER_URL } from '../config'

 
export const getServicio = async () => {
  const resp = await fetch(`${SERVER_URL}/servicio`);
  const { body } = await resp.json();
  return body;
}

export const getServicioById = async (id) => {
  const resp = await fetch (`${SERVER_URL}/servicio/${id}`);
  const { body } = await resp.json();
  const servicio = body;
  return servicio;
}

export const getServicioByIdRes = async (id) => {
  const resp = await fetch (`${SERVER_URL}/servicio/res/${id}`);
  if (resp.status === 200) {
    const { body } = await resp.json();
    return body;
  }
}

export const getAllServicioWithInseminacion = async () => {
  const resp = await fetch (`${SERVER_URL}/servicio/InseminacionOmonta`);
  if (resp.status === 200) {
    const { body } = await resp.json();
    return body;
  }
  return [];
}

export const getServicioWithInseminacionById = async (id) => {
  const resp = await fetch (`${SERVER_URL}/servicio/InseminacionOmonta/${id}`);
  if (resp.status === 200) {
    const { body } = await resp.json();
    return body;
  }
}

export const getServicioWithInseminacionByIdRes = async (id) => {
  const resp = await fetch (`${SERVER_URL}/servicio/res/InseminacionOmonta/${id}`);
  if (resp.status === 200) {
    const { body } = await resp.json();
    return body;
  }
}

export const getAllSecado = async () => {
  const resp = await fetch (`${SERVER_URL}/servicio/secado`);
  if (resp.status === 200) {
    const { body } = await resp.json();
    return body;
  }
  return [];
}

export const getSecadoByIdRes = async (id) => {
  const resp = await fetch (`${SERVER_URL}/servicio/res/secado/${id}`);
  if (resp.status === 200){
    const { body } = await resp.json();
    return body;
  }
}

export const updateServicio = async (id, body) => {
  console.log('body', body)
  const resp = await fetch(`${SERVER_URL}/servicio/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const { body: data } = await resp.json();
  return data;
}

export const createServicio = async (body) => {
  const resp = await fetch(`${SERVER_URL}/servicio`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  const { body: data } = await resp.json();
  return data;
}

export const deleteServicio = async (id) => {
  const resp = await fetch(`${SERVER_URL}/servicio/${id}`, {
    method: 'DELETE'
  });
  const { body } = await resp.json();
  return body;
}

