import { Pressable, StyleSheet, Text, View } from 'react-native'
import { InputText } from '../../components/Inputs'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import { getServicio } from '../../services/servicio'
import ItemRegistro from '../../components/itemRegistro'
import InputSearch from '../../components/InputSearch'
import { useNavigation } from '@react-navigation/native';

export default function ServiciosMain() {
  const navigation = useNavigation();

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
  const configureDrawerOptions = () => {
    navigation.setOptions({
      headerRight: () => (
        <Text
          style={{ padding: 20, color: 'blue', fontWeight: 'bold' }}
          onPress={() => console.log('Botón derecho presionado')}
        >
          Añadir
        </Text>
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