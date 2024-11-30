import { LineChart } from "react-native-chart-kit";
import { Dimensions, View } from "react-native";

function LineGraphic({ title, data, keyLabel, KeyValue }) {
  return ( 
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <LineChart
      data={{
        labels: data ? data.map((item) => item[keyLabel]) : ['sin datos'],
        datasets: [
          {
            data: data ? data.map((item) => item[KeyValue]) : [0]
          }
        ]
      }}
      width={Dimensions.get("window").width * 0.9}
      height={220}
      yLabelsOffset = {10}
      xLabelsOffset = {5}
      segments = {6}
      fromZero={true}
      yAxisLabel=""
      yAxisSuffix=""
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#6e92c4",
        backgroundGradientTo: "#a3bbda",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForLabels: {
          fontSize: 13, // Ajusta este valor para cambiar el tamaño de las etiquetas
        },
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "3",
          strokeWidth: "2",
          stroke: "#426ba3"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  </View>
  )
}

export default LineGraphic  