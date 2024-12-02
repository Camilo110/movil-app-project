import { LineChart } from "react-native-chart-kit";
import { Dimensions, View, Text } from "react-native";

function LineGraphic({ title= 'Gráfico de Línea', 
  data= [{ date: '2023-01-01', balance: 10 },
  { date: '2023-01-02', balance: 15 },
  { date: '2023-01-03', balance: 12 },
  { date: '2023-01-04', balance: 8 },
  { date: '2023-01-05', balance: 20 },], 
  keyLabel = 'date', 
  KeyValue = 'balance' }) {
  return ( 
  <View style={{flex: 1, width:'100%', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'white', paddingTop:5, borderRadius:20, marginTop:5}}>

    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 3, textAlign: 'center'}}>
      {title}
    </Text>

    <LineChart
      data={{
        labels: data ? data.map((item) => item[keyLabel].split('-')[2]) : ['sin datos'],
        datasets: [
          {
            data: data ? data.map((item) => item[KeyValue]) : [0]
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      fromZero={true}
      onDataPointClick={({ value, dataset, getColor }) => console.log(value)}
      chartConfig={{
        
        backgroundColor: "red",
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(100,192,192, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(50,100,100, ${opacity})`,
        propsForLabels: {
          fontSize: 12, // Ajusta este valor para cambiar el tamaño de las etiquetas
        },
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "3",
          strokeWidth: "2",
          stroke: "rgb(75,192,192)"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
        width: '100%',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    />
  </View>
  )
}

export default LineGraphic  