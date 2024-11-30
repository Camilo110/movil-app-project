
import {  Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";


const dataConfig = (groupExpenses=[{label: 'Prueba 1', value: 310}, 
  {label: 'Prueba 1', value: 20}, 
  {label: 'Prueba 1', value: 30}, 
  {label: 'Prueba 1', value: 80}, 
  {label: 'Prueba 1', value: 50}, 
  {label: 'Prueba 1', value: 160}, 
  {label: 'Prueba 1', value: 70}
]) => {
  const colorList = ["#809bce","#fb6f92","#9affff", "#ffc09f", "#ffee93" ,"#daeaf6", "#f6dada"];
  const datos = []
  groupExpenses.map(({label,value}, index) => {
    datos.push({
      name: label,
      population: value,
      color: colorList[index],
      legendFontColor: "#7F7F7F",
      legendFontSize: 14
    })
  })
  return datos;
}


export default function PieGraphic({ data }) {

  return (
     <PieChart
          data={dataConfig(data)}
          width={Dimensions.get("window").width * 0.9}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`
          }}

          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 0]}
          absolute
        />
  )
}