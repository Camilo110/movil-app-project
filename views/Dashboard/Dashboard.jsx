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
          <CardDashboard title="Animales" info="100" />
          <CardDashboard title="Animales" info="100" />
          <CardDashboard title="Animales" info="100" />
        </ScrollView>
        <LineGraphic />
        <LineGraphic />
        <PieGraphic />
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
  },
  modalView: {
    flexDirection: 'row',
  },
})