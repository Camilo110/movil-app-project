import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import {getProduccion} from '../../../services/produccion'
import ItemRegistros from './ItemRegistros'
import InputSearch from '../../../components/InputSearch'

export default function RegistrosList() {
  const [response, setResponse] = useState([])
  const [registros, setRegistros] = useState([])

  useEffect(() => {
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    const registros = await getProduccion()
    setResponse(registros)
    setRegistros(registros)
  }
  
  return (
    <View style={styles.container}>
      <InputSearch 
        placeholder='Buscar por nombre, fecha o tipo'
        data={response}
        onChange={setRegistros}
        keysToFilter={['ResNombre', 'Fecha', 'Tipo']}
      />

      <ScrollView>
        {
          registros.map((registro) => {
            return <ItemRegistros key={registro.ID} body={registro} fetch = {fetchRegistros}/>
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '98%',
    paddingHorizontal: 10,
    margin: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})