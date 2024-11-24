import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { getParaSecado } from "../../services/reproduccion"
import { useEffect, useState } from 'react'
import ItemRegistro from '../../components/itemRegistro'
import { getAllSecado } from '../../services/servicio'
import { InputSearch } from '../../components/Inputs'
import CardItem from '../../components/CardItem'

export default function SecadoMain() {

  const [paraSecar, setParaSecar] = useState([])
  const [dataSecado, setDataSecado] = useState([])
  
  useEffect(()=>{
    FetchData()
  }, [])

  const FetchData = async () => {
    const response = await getParaSecado()
    setParaSecar([{
      ResID: '01',
      ResNombre : 'Prueba',
      DiasGestacion: 120,
      FechaParto: '2002-22-10'
    },{
      ResID: '02',
      ResNombre : 'Prueba',
      DiasGestacion: 120,
      FechaParto: '2002-22-10'
    },{
      ResID: '03',
      ResNombre : 'Prueba',
      DiasGestacion: 120,
      FechaParto: '2002-22-10'
    },{
      ResID: '04',
      ResNombre : 'Prueba',
      DiasGestacion: 120,
      FechaParto: '2002-22-10'
    },])

    const responseSecado = await getAllSecado()
    setDataSecado(responseSecado)
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
        label="Buscar"
        value={''}
        onChange={() => console.log('first')}
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

const styles = StyleSheet.create({})