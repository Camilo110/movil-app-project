import { StyleSheet, Text, View } from 'react-native'
import InputSearch from '../../components/InputSearch'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import {getFinca} from '../../services/finca'
import ItemRegistros from '../../components/itemRegistro'

export default function FincasMain() {
  const [registros, setRegistros] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    const registros = await getFinca()
    setRegistros(registros)
    setResponse(registros)
  }
  
  return (
    <View style={styles.container}>
      <InputSearch
          data={response}
          value=''
          onChange={setRegistros}
          placeholder={'Nombre de Finca'}
          keysToFilter={['Nombre']}
      />

      <ScrollView>
        {
          registros.map((registro) => 
             <ItemRegistros
              key={registro.ID}
              data={registro}
              keyTitle1='Nombre'
              restKeys={['Direccion']}
              labels={['Dirección']}
              onEdit={()=>console.log('first')}
             />
          )
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 3,
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