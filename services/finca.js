import { SERVER_URL } from '../config'

 
export const getFinca = async () => {
  const resp= await fetch(`${SERVER_URL}/finca`);
  const {body} = await resp.json();
  return body;
 }

export const getFincaById = async (id) => {
  const resp = await fetch(`${SERVER_URL}/finca/${id}`);
  const {body} = await resp.json();
  return body;
}

export const updateFinca = async (id, bodys) => {
  console.log(bodys, "BODY")
  const resp = await fetch(`${SERVER_URL}/finca/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodys)
  });
  const {body} = await resp.json();
  return body;
}

export const createFinca = async (res) => {
  const resp = await fetch(`${SERVER_URL}/finca`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  });
  const {body} = await resp.json();
  return body;
}

export const deleteFinca = async (id) => {
  const resp = await fetch(`${SERVER_URL}/finca/${id}`, {
    method: 'DELETE'
  });
  console.log('melo')
  const {body} = await resp.json();
  return body;
}
