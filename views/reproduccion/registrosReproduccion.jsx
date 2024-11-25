import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import { useState, useEffect } from 'react'
import InputSearch from '../../components/InputSearch'
import { getAllServicioWithInseminacion } from '../../services/servicio'
import { getPartos } from '../../services/reproduccion'
import ItemRegistro from '../../components/itemRegistro'

export default function RegistrosReproduccion() {

  const [dataServicio, setDataServicio] = useState([])
  const [dataPartos, setDataPartos] = useState([])

  const [responseServicio, setResponseServicio] = useState([])
  const [responsePartos, setResponsePartos] = useState([])

  const [verInseminacion, setVerInseminacion] = useState(true)

  useEffect(() => {
    FetchEnGestacion()
  }, [])

  const FetchEnGestacion = async () => {
    const servicios = await getAllServicioWithInseminacion()
    console.log(servicios)
    setDataServicio(servicios)
    setResponseServicio(servicios)

    const partos = await getPartos()
    setDataPartos(partos)
    setResponsePartos(partos)
  }

  return (
    <View>
      <View>
        <View style={styles.Head}>
          <Text>
            Ver:
          </Text>
          <Pressable
            onPress={() => setVerInseminacion(true)}
          >
            <Text>
              Inseminación
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setVerInseminacion(false)}
          >
            <Text>
              Partos
            </Text>
          </Pressable>
        </View>
      </View>
      {
        verInseminacion ?
          <>
            <InputSearch
              placeholder="Buscar"
              value={''}
              onChange={setDataServicio}
              data={responseServicio}
              keysToFilter={['ResNombre', 'Fecha', 'Tipo']}
            />
            <ScrollView>
              {
                dataServicio.map((registro) => {
                  return <ItemRegistro key={registro.ID} body={registro} />
                })
              }
            </ScrollView>
          </>
          :
          <>
            <InputSearch
              placeholder="Buscar"
              value={''}
              onChange={setDataPartos}
              data={responsePartos}
              keysToFilter={['ResNombre', 'FechaParto']}
            />
            <ScrollView>
              {
                dataPartos.map((registro) => {
                  return <ItemRegistro key={registro.HijoID} body={registro} />
                })
              }
            </ScrollView>
          </>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  Head: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    marginBottom: 5,
    gap: 10
  }
})