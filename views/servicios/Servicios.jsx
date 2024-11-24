import { Pressable, StyleSheet, Text, View } from 'react-native'
import { InputText } from '../../components/Inputs'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { getServicio } from '../../services/servicio'
import ItemRegistro from '../../components/itemRegistro'

export default function ServiciosMain() {
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
      
      <Text style={styles.title}>Registros</Text>

      <View style={styles.containerHead}>
        <InputText styles={styles.input} placeholder="Fecha o Numero de Res" label={'Buscar Registros'} />
        <Pressable>
          <Text>
            Agregar
          </Text>
        </Pressable>
      </View>
      
      <ScrollView >
        {
          registros.map((registro) => {
            return <ItemRegistro key={registro.ID} body={registro} />
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
  containerHead:{
    width: '80%',
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    marginBottom: 20
  }
})