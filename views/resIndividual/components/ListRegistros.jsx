import { StyleSheet, Text, ScrollView, View } from 'react-native'
import ItemRegistro from './ItemRegistro'
import { useEffect, useState } from 'react'
import {getServicio} from '../../../services/servicio'

export default function ListRegistros() {
  const [registros, setRegistros] = useState([])
  useEffect(() => {
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    const registros = await getServicio()
    setRegistros(registros)
  }


  return (
    <View style={styles.container}>
    <ScrollView horizontal={true}>
      {
        registros.map((registro) => (
          <ItemRegistro key={registro.ID} body={registro} />
        ))
      }
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 5,
  },
})