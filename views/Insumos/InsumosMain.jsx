import { StyleSheet, Text, View, Pressable } from 'react-native'
import { InputText } from '../../components/Inputs'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import {getInsumo} from '../../services/Insumo'
import ItemRegistros from '../../components/itemRegistro'
import InputSearch from '../../components/InputSearch'
import { useNavigation } from '@react-navigation/native';

export default function InsumosMain() {
  const navigation = useNavigation();

  const [registros, setRegistros] = useState([])
  const [response, setResponse] = useState([])

  useEffect(() => {
    configureDrawerOptions();
    fetchRegistros()
  }, [])

  const fetchRegistros = async () => {
    const registros = await getInsumo()
    setRegistros(registros)
    setResponse(registros)
  }

  const configureDrawerOptions = () => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={{ marginRight: 20, margin:4 , backgroundColor: '#6994c5', padding: 5, borderRadius: 10 }}
          /* onPress={onOpenModal} */
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
          placeholder={'Nombre, fecha Vencimiento o Ingreso'}
          keysToFilter={['Nombre', 'FechaVencimiento', 'FechaIngreso']}
        />

      <ScrollView>
        {
          registros.map((registro) =>
            <ItemRegistros 
              key={registro.ID}
              data={registro}
              keyTitle1='Nombre'
              keyTitle2='Numero'
              restKeys={['UnidadMedida', 'CantidadActual']}
              labels={['Unidad de Medida', 'Cantidad']}
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
    padding: 5,
    margin: 3,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    marginBottom: 10
  }
})