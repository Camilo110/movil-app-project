import { StyleSheet, Text, View } from 'react-native'
import { InputText } from '../../../components/Inputs'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import {getServicio} from '../../../services/servicio'
import ItemRegistro from '../../../components/itemRegistro'

export default function RegistrosList() {
  const [registros, setRegistros] = useState([])

  useEffect(() => {
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    const registros = await getServicio()
    setRegistros(registros)
  }
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Registros</Text>
      <InputText styles={styles.input}placeholder="Fecha o Numero de Res" label={'Buscar Registros'} />

      {
        registros.map((registro) => {
          return <ItemRegistro key={registro.ID} body={registro} />
        })
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '98%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    marginBottom: 10
  }
})