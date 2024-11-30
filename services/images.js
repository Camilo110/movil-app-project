import { SERVER_URL } from "../config";

export const getImages = async (id) => {
  const response = await fetch(`${SERVER_URL}/imagen/${id}`);
  const {body} = await response.json()
  return body
}


// export const uploadImage = async (id, files, key) => {
//   const formData = new FormData()
//   for (let i = 0; i < files.length; i++) {
//       formData.append(key, files[i])
//   }
//   formData.append('resID', id)

//   const response = await fetch(`${SERVER_URL}/imagen`, {
//       method: 'POST',
//       body: formData,
//   });
//   const resp = await response.json()
//   console.log(resp)
//   if (resp.status == 200) {
//       return 'OK'
//   }
// }

export const uploadImage = async (imageUri, id) => {
  const formData = new FormData();
  formData.append('images', {
    uri: imageUri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  });
  formData.append('resID', id)

  try {
   const response = await fetch(`${SERVER_URL}/imagen`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = await response.json();
    console.log('Imagen subida exitosamente:', data);
  } catch (error) {
    console.error('Error al subir la imagen:', error);
  }
};


export const deleteImage = async (id) => {
  const response = await fetch(`${SERVER_URL}/imagen/${id}`, {
      method: 'DELETE',
  });
  const resp = await response.json()
  console.log(resp)
}