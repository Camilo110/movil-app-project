import { StyleSheet, Text, ScrollView, View } from 'react-native'
import ItemRegistro from '../../../components/itemRegistro'
import { useEffect, useState } from 'react'
import { getServicioByIdRes, deleteServicio, getServicioWithInseminacionByIdRes, getSecadoByIdRes } from '../../../services/servicio'


export default function ListRegistros({id}) {
  const [servicios, setServicios] = useState([])
  const [secados, setSecados] = useState([])
  const [insemianciones, setInseminaciones] = useState([])
  useEffect(() => {
    fetchServicios()
  }, [])

  const fetchServicios = async () => {
    const servicios = await getServicioByIdRes(id)
    setServicios(servicios)

    const secado = await getSecadoByIdRes(id)
    setSecados(secado)

    const inseminacion = await getServicioWithInseminacionByIdRes(id)
    setInseminaciones(inseminacion)
  }


  return (
    <View style={styles.container}>
      <Text>
        Servicios
      </Text>
    <ScrollView horizontal={true}>
      { servicios &&
        servicios.map((registro) => (
          <ItemRegistro key={registro.ID} body={registro} />
        ))
      }
    </ScrollView>
    <Text>
        Secado
      </Text>
    <ScrollView horizontal={true}>
      { secados &&
        secados.map((registro) => (
          <ItemRegistro key={`${registro.ID}`} body={registro} />
        ))
      }
    </ScrollView>
    <Text>
        Inseminaciones
      </Text>
    <ScrollView horizontal={true}>
      { insemianciones &&
        insemianciones.map((registro) => (
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