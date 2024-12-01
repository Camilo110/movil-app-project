import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {NumeroRes} from '../components/NumeroRes'

const DecoratedFecha = (dias) => {
  // TODO retornar un string con meses y días
  return `${dias} días`
}

export default function CardItem({
    ResID,
    Numero,
    Nombre,
    Estado,
    Fecha,
    FechaParto,
    onAffirmative,
    affirmativeToolTipText,
    onNegative,
    negativeToolTipText,
    diasGestacion,
    isRecomendacion = false,
  }){
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.nombre}>{Nombre}</Text>
          <Text style={styles.nombre}><NumeroRes id={ResID}/></Text>
          {isRecomendacion && (
            <View style={styles.tooltipContainer}>
              <Image
                source={require('../assets/favicon.png')}
                style={styles.tooltipImage}
              />
              <Text style={styles.tooltipText}>
                Esta monta/inseminación ha sido recomendada por el software
              </Text>
            </View>
          )}
        </View>
  
        
        <Text style={styles.text}>{Estado}</Text>
  
        {diasGestacion && (
          <Text style={styles.text}>Tiempo gestación: {DecoratedFecha(diasGestacion)}</Text>
        )}
  
        {FechaParto && <Text style={styles.text}>Parto: {FechaParto}</Text>}
        {Fecha && <Text style={styles.text}>Fecha: {Fecha}</Text>}
  
        <View style={styles.opciones}>
          {onAffirmative && (
            <TouchableOpacity style={styles.button} onPress={onAffirmative}>
              <Text style={styles.tooltipText}>
                {affirmativeToolTipText || 'Confirmar'}
              </Text>
            </TouchableOpacity>
          )}
          {onNegative && (
            <TouchableOpacity style={styles.button} onPress={onNegative}>
              <Text style={styles.tooltipText}>
                {negativeToolTipText || 'Cancelar'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 15,
      margin: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nombre: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    tooltipContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    tooltipImage: {
      width: 16,
      height: 12,
      marginLeft: 5,
    },
    tooltipText: {
      fontSize: 12,
      color: 'white',
    },
    text: {
      fontSize: 14,
      marginVertical: 4,
    },
    opciones: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 3,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#6994c5',
      padding: 7,
      borderRadius: 4,
      margin: 2,
    },
  });
  
