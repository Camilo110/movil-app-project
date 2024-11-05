import { SERVER_URL } from '@env';

export const getResModal = async () => {
  const resp= await fetch(`${SERVER_URL}/finca`);
  console.log("CUIDADO")
  const {body} = await resp.json();
  const fincas = body.map(({ID, Nombre}) => ({value: ID, label: Nombre}));

  const response= await fetch(`${SERVER_URL}/res`);
  const {body: reses} = await response.json();
  const madres = reses.filter(({Sexo}) => Sexo === 'F').map(({ID, Nombre}) => ({value: ID, label: Nombre}))
  const padres = reses.filter(({Sexo}) => Sexo === 'M').map(({ID, Nombre}) => ({value: ID, label: Nombre}))

  return {fincas, madres, padres}
 }

 export const getProduccionModal = async () => {
  const response= await fetch(`${SERVER_URL}/res`);
  const {body: reses} = await response.json();
  const res = reses.map(({ID, Numero, Nombre, Sexo}) => ({ID, Numero, Nombre, Sexo, selected: false}))

  return res
 }

 export const getServiciosModal = async () => {
  const response = await fetch(`${SERVER_URL}/res`);
  const {body} = await response.json();
  const reses = body.map(({ID, Nombre}) => ({ID, value: Nombre}))
  return reses
 }

 export const getProveedor = async () => {
  const response = await fetch(`${SERVER_URL}/proveedor`);
  const {body} = await response.json();
  const proveedores = body.map(({ID, Nombre}) => ({ID, value: Nombre}))
  return proveedores
 }

 export const getCliente = async () => {
  const response = await fetch(`${SERVER_URL}/cliente`);
  const {body} = await response.json();
  const clientes = body.map(({ID, Nombre}) => ({ID, value: Nombre}))
  return clientes
 }