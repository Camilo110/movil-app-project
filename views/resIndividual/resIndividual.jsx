import { StyleSheet, Text, View, Pressable, ScrollView} from 'react-native'
import ListImagen from './components/ListImagen'
import ListLinaje from './components/ListLinaje'
import { useEffect, useState } from 'react'
import { getResById, getHijos } from '../../services/res'
import { NumeroRes } from '../../components/NumeroRes'
import { daysToYearsandMonths } from '../../utils/DaysToYearsandMonths'
import ListRegistros from './components/ListRegistros'
import { getResModal } from '../../services/forms'

import * as ImagePicker from 'expo-image-picker';
import { uploadImage } from '../../services/images';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import { EditResModal } from './components/EditResModal'

export default function ResIndividual({id}) {

  const [res, setRes] = useState({})
  const [numHijo, setNumHijo] = useState(0)
  const [loading, setLoading] = useState(true)
  const [linaje, setLinaje] = useState([])

  const [formData, setFormData] = useState({fincas: [], madres: [], padres: []})

  const [openModalEditRes, setOpenModalEditRes] = useState(false)

  useEffect(() => {
    fetchRes()
  }, [])

  const fetchRes = async () => {
    let listLinaje = []

    const resp = await getResById(id)
    setRes(resp)

    if (resp.Padre) {
      const padre = await getResById(resp.Padre)
      listLinaje.push({ id: padre.ID, nombre: padre.Nombre, Numero: padre.Numero, familiaridad: 'Padre' })
    }

    if (resp.Madre) {
      const madre = await getResById(resp.Madre)
      listLinaje.push({ id: madre.ID, nombre: madre.Nombre, Numero: madre.Numero, familiaridad: 'Madre' })
    }

    const hijos = await getHijos(id)

    if (hijos) {
      setNumHijo(hijos.length)
      hijos.forEach(hijo => {
        listLinaje.push({ id: hijo.ID, nombre: hijo.Nombre, Numero: hijo.Numero, familiaridad: 'Hijo' })
      })
    }
    setLinaje(listLinaje)
    setLoading(false)
  }

  const OnEditRes = async () => {
    const data = await getResModal();
    if (data) setFormData(data);
    setOpenModalEditRes(true)
  }

  const pickImageFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri, id);
    }


  };

  const captureImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri, id);
    }
  };

  return (
    <>
        <View style={styles.TopInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <NumeroRes id = {id}/>
            <Text style={styles.title}>{res.Nombre}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 15}}>
            <Pressable onPress={captureImageFromCamera}>
              <MaterialCommunityIcons name="camera" size={30} color="black" />
            </Pressable>
            <Pressable  onPress={pickImageFromLibrary}>
              <MaterialCommunityIcons name="image-plus" size={28} color="black" />
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons name="skull-crossbones" size={28} color="black" />
            </Pressable>
          </View>
        </View> 
      
      <ScrollView style={styles.container}>
        
          <ListImagen id = {id}/>

          <View style={styles.infoExt}>
            <View style={styles.info}>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>Información</Text>
                <Pressable onPress={OnEditRes}>
                  <Feather name="edit" size={24} color="black" />
                </Pressable>
              </View>
                
              {
                res.Sexo === 'F' ?
                <Text><Text style={{fontWeight: 'bold'}}>Número de partos:</Text> {res.NumeroCrias}</Text>
                :
                <Text><Text style={{fontWeight: 'bold'}}>Cantidad de Hijos:</Text> {numHijo}</Text>
              }
              <Text><Text style={{fontWeight: 'bold'}}>Ubicación:</Text> {res.FincaNombre}</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Edad:</Text> {daysToYearsandMonths(res.Edad)}</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Estado:</Text> {res.Estado}</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Peso al Nacer:</Text> {res.PesoNacimiento} Kg</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Peso Actual:</Text> {res.PesoActual} Kg</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Tipo:</Text> {res.Tipo}</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Sexo:</Text> {res.Sexo}</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Raza:</Text> {res.Raza}</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Registro ICA:</Text> {res.RegistroICA}</Text>
              <Text><Text style={{fontWeight: 'bold'}}>Observaciones:</Text> {res.Observaciones}</Text>
            </View>
          </View>
          
          <Text style={styles.title}>
            Linaje
          </Text>
          <ListLinaje listaLinaje = {linaje}/>
          
          <ListRegistros id={id}/>
      </ScrollView>
      
      <EditResModal values={res} setValues={setRes} formData={formData} visible={openModalEditRes} setVisible={setOpenModalEditRes} />
      
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3
  },
  title: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  TopInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    padding:10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoExt: {
    padding: 10
  },
  info: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 15,
  }
})
