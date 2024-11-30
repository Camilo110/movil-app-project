import { StyleSheet, Text, ScrollView, View } from 'react-native'
import ItemRegistro from '../../../components/itemRegistro'
import { useEffect, useState } from 'react'
import { getServicioByIdRes, deleteServicio, getServicioWithInseminacionByIdRes, getSecadoByIdRes } from '../../../services/servicio'
import { EditResModal } from './EditResModal'

export default function ListRegistros({id}) {
  const [servicios, setServicios] = useState([])
  const [secados, setSecados] = useState([])
  const [inseminaciones, setInseminaciones] = useState([])
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
      <Text style={styles.title}>
        Servicios
      </Text>
    <ScrollView horizontal={true}>
      { servicios ?
        servicios.map((registro) => (
          <ItemRegistro 
            key={registro.ID}
            data={registro}
            keyTitle1='ResNombre'
            keyTitle2={'Numero'}
            restKeys={['Fecha', 'Tipo', 'Veterinario']}
            labels={['Fecha', 'Tipo', 'Veterinario']}
          />
        ))
        :
        <Text>No hay servicios</Text>
      }
    </ScrollView>
    <Text style={styles.title}>
        Secado
      </Text>
    <ScrollView horizontal={true}>
      { secados ?
        secados.map((registro) => (
          <ItemRegistro 
            key={registro.ID}
            data={registro}
            keyTitle1='ResNombre'
            keyTitle2={'Numero'}
            restKeys={['Fecha', 'Tipo', 'Veterinario']}
            labels={['Fecha', 'Tipo', 'Veterinario']}
          />
        ))
        :
        <Text>No hay secados</Text>
      }
    </ScrollView>
    <Text style={styles.title}>
        Inseminaciones
      </Text>
    <ScrollView horizontal={true}>
      { inseminaciones ?
        inseminaciones.map((registro) => (
          <ItemRegistro 
            key={registro.ID}
            data={registro}
            keyTitle1='ResNombre'
            keyTitle2={'Numero'}
            restKeys={['Fecha', 'Tipo', 'Veterinario']}
            labels={['Fecha', 'Tipo', 'Veterinario']}
          />
        ))
        :
        <Text>No hay inseminaciones</Text>
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
  title: {
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 5
  },
})