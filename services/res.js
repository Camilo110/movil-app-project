import { SERVER_URL } from '../config'
 
export const getRes = async () => {
const resp= await fetch(`${SERVER_URL}/res`);
const {body} = await resp.json();
return body;
}


export const getResById = async (id) => {
  const res = await fetch(`${SERVER_URL}/res/${id}`);
  const {body} = await res.json();
  return body;
}

export const getHijos = async (id) => {
  const ListHijos = await fetch(`${SERVER_URL}/res/hijos/${id}`);
  if (ListHijos.status === 200) {
    const {body} = await ListHijos.json();  
    return body;
  }
}

export const updateRes = async (id, bodys) => {
  console.log(bodys, "BODY")
  const resp = await fetch(`${SERVER_URL}/res/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodys)
  });
  const {body} = await resp.json();
  return body;
}

export const createRes = async (res) => {
  console.log(res)
  const resp = await fetch(`${SERVER_URL}/res`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(res)
  });
  const {body} = await resp.json();
  console.log(body, "RESP")
    return body;
  }

