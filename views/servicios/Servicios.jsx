import { Pressable, StyleSheet, Text, View} from 'react-native'
import { InputText } from '../../components/Inputs'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { getServicio } from '../../services/servicio'
import ItemRegistro from '../../components/itemRegistro'
import InputSearch from '../../components/InputSearch'
import { useNavigation } from '@react-navigation/native';
import FormServicios from './components/FormServicios'

export default function ServiciosMain() {
  const navigation = useNavigation();

  const [visible, setModalVisible] = useState(false)

  const [registros, setRegistros] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    configureDrawerOptions();
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    const registros = await getServicio()
    setRegistros(registros)
    setResponse(registros)
  }
  onOpenModal = () => {
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
      
        <InputSearch
          data={response}
          value=''
          onChange={setRegistros}
          placeholder={'Nombre de Res, Fecha o Tipo'}
          keysToFilter={['ResNombre', 'Fecha', 'Tipo']}
        />      
      <ScrollView >
        {
          registros.map((registro) =>  
          <ItemRegistro 
            key={registro.ID}
            data={registro}
            keyTitle1='Tipo'
            keyTitle2='Número'
            restKeys={['Fecha', 'Veterinario', 'ResNombre', 'listInsumos']}
            labels={['Fecha', 'Veterinario', 'Nombre Res', 'Insumos']}
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