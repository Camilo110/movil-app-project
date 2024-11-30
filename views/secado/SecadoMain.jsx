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
    <View style={styles.container}>
      <Text style={styles.title}>Para Inseminar</Text>
      {
        paraSecar.length === 0 ?

        <Text>No hay registros</Text> :

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

      }
      

      <InputSearch
        placeholder="Fecha, Nombre res"
        value={''}
        onChange={setDataSecado}
        data={responseRegistros}
        keysToFilter={['Fecha', 'ResNombre']}
        />

    <ScrollView>
      {
        dataSecado.map((registro) => 
          <ItemRegistro 
            key={registro.ID}
            data={registro}
            keyTitle1='ResNombre'
            keyTitle2='Número'
            restKeys={['Fecha', 'Veterinario', 'listInsumos']}
            labels={['Fecha', 'Veterinario', 'Insumos']}
            onDelete={()=>console.log('first')}
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
    padding: 3,
    margin: 5
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})