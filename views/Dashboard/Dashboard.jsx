import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CardDashboard } from './components/Cards'
import LineGraphic from './components/Line'
import PieGraphic from './components/Pie'
import { InputDate } from '../../components/Inputs'
import { useState } from 'react'

export default function Dashboard() {

  const [initDate, setInitDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date.toISOString().split('T')[0];
  });

  const onChange = (date, key) => {
    if (key === 'init') setInitDate(date);
    if (key === 'end') setEndDate(date);
    //fetchDataWithFechas
  }

  return (
    <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <InputDate  
        label='Desde'
        value={initDate}
        style={{flexDirection:'row', alignItems:'center'}}
        onChange={(date) => onChange(date, 'init')} />
      <InputDate 
        label='Hasta'
        value={endDate}
        style={{flexDirection:'row', alignItems:'center'}} 
        onChange={(date) => onChange(date, 'end')} />
    </View>

    <ScrollView>
      <View>
        <ScrollView horizontal>
          <CardDashboard title="Total Animales" info="42" />
          <CardDashboard title="Total de Partos" info="2" />
          <CardDashboard title="Total Leche (Lts)" info="641" />
          <CardDashboard title="Total Carne (kg)" info="859" />
        </ScrollView>
        <LineGraphic
          title='Producción de Leche' 
        />
        <LineGraphic 
          title='Balance'
        />
        <PieGraphic data={DataHebrasMachos} title='Distribución de Animales' />
        <PieGraphic data={DataTiposAnimales} title='Tipos de Animales' />
        <PieGraphic data={DataRazas} title='Razas' />
        <PieGraphic data={DataEdadesAnimales} title='Edades de Animales' />
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f6f6f9'
  },
  modalView: {
    flexDirection: 'row',
  },
})


const DataHebrasMachos = [
  { label: 'Hembras', value: 31 },
  { label: 'Machos', value: 11 },
];

const DataTiposAnimales = [
  { label: 'Leche', value: 25 },
  { label: 'Carne', value: 12 },
  { label: 'Doble Propósito', value: 5 },
];

const DataRazas = [
  { label: 'Holstein', value: 18 },
  { label: 'Jersey', value: 10 },
  { label: 'Normando', value: 10 },
  { label: 'Otros', value: 4 },
];

const DataEdadesAnimales = [
  { label: '0 a 3 meses', value: 5 },
  { label: '3 a 9 meses', value: 8 },
  { label: '9 a 12 meses', value: 4 },
  { label: '1 a 2 años', value: 10 },
  { label: '2 a 3 años', value: 7 },
  { label: '3 a 5 años', value: 5 },
  { label: 'Mayores de 5 años', value: 3 },
];
