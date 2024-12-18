import { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { getAllParaInseminar, getParaInseminarSugeridos, createParaInseminar } from '../../services/paraInseminar';
import { getEnGestacion, getInseminacionPorConfirmar, ConfirmarInseminacion, inseminacionFallida, getPartos } from '../../services/reproduccion';
import { getAllServicioWithInseminacion } from '../../services/servicio';
import CardItem from '../../components/CardItem'
import { useNavigation } from '@react-navigation/native';

export default function ReproduccionMain() {
  const navigation = useNavigation();

  const [dataEnGestacion, setDataEnGestacion] = useState([])
  const [dataParaInseminar, setDataParaInseminar] = useState([])
  const [dataParaInseminarSugeridos, setDataParaInseminarSugeridos] = useState([])
  const [dataInseminacionPorConfirmar, setDataInseminacionPorConfirmar] = useState([])

  const [dataServicio, setDataServicio] = useState([])
  const [dataPartos, setDataPartos] = useState([])

  useEffect(() => {
    configureDrawerOptions();
    FetchEnGestacion();
  }, []);

  const configureDrawerOptions = () => {
    
    const drawerNavigation = navigation.getParent();

    // Configura las opciones del Drawer
    drawerNavigation?.setOptions({
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
  const FetchEnGestacion = async () => {
    
      const EnGestacion = await  getEnGestacion()
      setDataEnGestacion(EnGestacion)

      const ParaInseminar = await getAllParaInseminar()
      setDataParaInseminar(ParaInseminar)

      const servicios = await getAllServicioWithInseminacion()
      console.log(servicios)
      setDataServicio(servicios)
      
      const InseminacionPorConfirmar = await getInseminacionPorConfirmar()
      setDataInseminacionPorConfirmar(InseminacionPorConfirmar)
      
      const ParaInseminarSugeridos = await getParaInseminarSugeridos()
      setDataParaInseminarSugeridos(ParaInseminarSugeridos)

      const partos = await getPartos()
      setDataPartos(partos)
    }

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text>Para Inseminar</Text>
      <ScrollView  horizontal={true}>
        {
          dataParaInseminar.map((item) => (
            <CardItem 
              key={item.ID}
              ResID={item.ResID}
              Nombre={item.ResNombre}
              Estado={item.Estado}
              Fecha={item.Fecha}
              onAffirmative={() => onAddInseminacion({ResID: item.ResID, Fecha: new Date().toISOString().split('T')[0]})}
              />
          ))
          }
          {
            dataParaInseminarSugeridos.map((item) => (
              <CardItem 
              key={item.ID}
              ResID={item.ID}
              Nombre={item.ResNombre}
              Estado={'Sugerido'}
              Fecha={'Sin Confirmar'}
              isRecomendacion={true}
              onAffirmative={() => onOpenModalParaInseminar(item)}
              />
            ))
          }
        </ScrollView>

        <Text> Inseminaciones por Confirmar</Text>
        <ScrollView  horizontal={true} contentContainerStyle={{width:'100%'}}>
          {
          dataInseminacionPorConfirmar.map((item) => (
              <CardItem
                key={item.ID}
                ResID={item.ResID}
                Nombre={item.ResNombre}
                Estado={'Por Confirmar'}
                FechaParto={item.FechaParto}
                onAffirmative={() => InseminacionCorrecta(item.ID)}
                onNegative={() => InsemiancionFallida(item.ID)}
                />
          ))
        }
      </ScrollView>

      <Text>En Gestación</Text>
      <ScrollView  horizontal={true} >
        {
          dataEnGestacion.map((item) => (
            <CardItem 
            key={item.ResID}
            Numero={item.Numero}
            ResID={item.ResID}
            Nombre={item.ResNombre}
            Estado={'En Gestacion'}
            FechaParto={item.FechaParto}
            onAffirmative={() => openModalCreateServicioGestacion(item)}
            onNegative={() => openModalAborto(item)}
            />
          ))
        }
        </ScrollView>
       </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    padding: 3,
  },
})