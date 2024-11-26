import { StyleSheet, Text, View, Pressable, ScrollView} from 'react-native'
import ListImagen from './components/ListImagen'
import ListLinaje from './components/ListLinaje'
import { useEffect, useState } from 'react'
import { getResById, getHijos } from '../../services/res'
import { NumeroRes } from '../../components/NumeroRes'
import { daysToYearsandMonths } from '../../utils/DaysToYearsandMonths'
import ListRegistros from './components/ListRegistros'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ResIndividual({id}) {

  const [res, setRes] = useState({})
  const [numHijo, setNumHijo] = useState(0)
  const [loading, setLoading] = useState(true)
  const [linaje, setLinaje] = useState({})

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

  return (
    <ScrollView style={styles.container}>
      {
        loading ? <Text>Cargando...</Text> :
        <>
        <View style={styles.TopInfo}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <NumeroRes id = {id}/>
            <Text style={styles.title}>{res.Nombre}</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 15}}>
            <Pressable>
              <MaterialCommunityIcons name="image-plus" size={24} color="black" />
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons name="circle-edit-outline" size={24} color="black" />
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons name="skull-crossbones" size={24} color="black" />
            </Pressable>
            <Pressable>
              <MaterialCommunityIcons name="cash-check" size={24} color="black" />
            </Pressable>
          </View>
        </View> 
        
          <ListImagen id = {id}/>

          <View style={styles.infoExt}>
            <View style={styles.info}>
              <Text style={{fontWeight: 'bold'}}>Información</Text>
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
          
          <Text>
            Linaje
          </Text>
          <ListLinaje listaLinaje = {linaje}/>
          
          <Text>
            Registros
          </Text>
          <ListRegistros id={id}/>
        </>
      }
      </ScrollView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
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
    marginBottom: 10,
    padding:10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoExt: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    
  },
  info: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 15,
  }
})
