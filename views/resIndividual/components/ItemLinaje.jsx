import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { NumeroRes } from '../../../components/NumeroRes';
import { SERVER_URL } from '@env';
 

export default function ItemLinaje({ id, nombre, familiaridad }) {
  return (
    <View style={styles.tarjetaLinaje}>
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: `${SERVER_URL}/imagen/id/${id}` }}
        style={styles.image}
        alt="Cow Image"
      />
      <Text style={styles.familiaridad}>{familiaridad}</Text>
    </View>
    <View style={styles.info}>
      <Text style={styles.nombre}>{nombre}</Text>
      <NumeroRes id={id} />
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  tarjetaLinaje: {
    width: 190,
    height: 210,
    marginRight: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    position: 'relative',
    padding: 5,
    width: '100%',
    height: 150,
  },
  image: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  familiaridad: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 13,
    padding: 7,
    borderRadius: 3,
  },
  info: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
