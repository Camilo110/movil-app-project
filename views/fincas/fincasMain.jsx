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
      <Text style={styles.title}>Registros</Text>
      <InputSearch
          data={response}
          value=''
          onChange={setRegistros}
          placeholder={'Nombre de Finca'}
          keysToFilter={['Nombre']}
      />

      <ScrollView>
        {
          registros.map((registro) => {
            return <ItemRegistros key={registro.ID} body={getFinca} />
          })
        }
      </ScrollView>
    </View>
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