import { StyleSheet, Text, View } from 'react-native'
import { InputText } from '../../components/Inputs'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import {getInsumo} from '../../services/Insumo'
import ItemRegistros from '../../components/itemRegistro'
import InputSearch from '../../components/InputSearch'

export default function InsumosMain() {
  const [registros, setRegistros] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    const registros = await getInsumo()
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
          placeholder={'Nombre, fecha Vencimiento o Ingreso'}
          keysToFilter={['Nombre', 'FechaVencimiento', 'FechaIngreso']}
        />

      <ScrollView>
        {
          registros.map((registro) => {
            return <ItemRegistros key={registro.ID} body={registro} />
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