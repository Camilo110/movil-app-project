import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { getParaSecado } from "../../services/reproduccion"
import { useEffect, useState } from 'react'
import ItemRegistro from '../../components/itemRegistro'
import { getAllSecado } from '../../services/servicio'
import InputSearch from '../../components/InputSearch'
import CardItem from '../../components/CardItem'

export default function SecadoMain() {

  const [paraSecar, setParaSecar] = useState([])
  const [dataSecado, setDataSecado] = useState([])

  const [responseRegistros, setResponseRegistros] = useState([])
  
  useEffect(()=>{
    FetchData()
  }, [])

  const FetchData = async () => {
    const response = await getParaSecado()
    setParaSecar(response)


    const responseSecado = await getAllSecado()
    setDataSecado(responseSecado)
    setResponseRegistros(responseSecado)
  }
  return (
    <View style={{flex:1}}>
      <Text>Para Inseminar</Text>
      <ScrollView  horizontal={true}>
        {
          paraSecar.map((item) => (
            <CardItem 
              key={item.ResID}
              ResID={item.ResID}
              Nombre={item.ResNombre}
              Estado={'En Gestación'}
              diasGestacion={item.DiasGestacion}
              FechaParto={item.FechaParto}
              onAffirmative={() => addSecado(item.ResID)}
              affirmativeToolTipText='Agregar a secado'
            />
          ))
        }
      </ScrollView>

      <InputSearch
        placeholder="Fecha, Nombre res"
        value={''}
        onChange={setDataSecado}
        data={responseRegistros}
        keysToFilter={['Fecha', 'ResNombre']}
        />

    <ScrollView>
      {
        dataSecado.map((registro) => {
          return <ItemRegistro key={registro.ID} body={registro} />
        })
      }
      </ScrollView>
    </View>
  )
}
