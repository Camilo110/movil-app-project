import { StyleSheet, Text, View, ScrollView, Pressable} from 'react-native'
import { getParaSecado } from "../../services/reproduccion"
import { useEffect, useState } from 'react'
import ItemRegistro from '../../components/itemRegistro'
import { getAllSecado } from '../../services/servicio'
import InputSearch from '../../components/InputSearch'
import CardItem from '../../components/CardItem'
import { useNavigation } from '@react-navigation/native';
import FormServicios from '../servicios/components/FormServicios'

export default function SecadoMain() {
  const navigation = useNavigation();

  const [paraSecar, setParaSecar] = useState([])
  const [dataSecado, setDataSecado] = useState([])

  const [visible, setModalVisible] = useState(false)

  const [responseRegistros, setResponseRegistros] = useState([])
  
  useEffect(()=>{
    configureDrawerOptions();
    FetchData()
  }, [])

  const FetchData = async () => {
    const response = await getParaSecado()
    setParaSecar(response)


    const responseSecado = await getAllSecado()
    setDataSecado(responseSecado)
    setResponseRegistros(responseSecado)
  }

  const onOpenModal = () => {
    console.log('helloooooooo')
    setModalVisible(true)
  }

  const configureDrawerOptions = () => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={{ marginRight: 20, margin:4 , backgroundColor: '#6994c5', padding: 5, borderRadius: 10 }}
          onPress={onOpenModal}
        >
          <Text style={{margin:4 , color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            Añadir
          </Text>
        </Pressable>
      ),
    });
  };
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
      <FormServicios visible={visible} setModalVisible={setModalVisible}/>
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