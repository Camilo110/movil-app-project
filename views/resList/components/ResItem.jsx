import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
import { NumeroRes } from '../../../components/NumeroRes';
import { daysToYearsandMonths } from "../../../utils/DaysToYearsandMonths";
import PropTypes from 'prop-types';
import { Link } from 'expo-router';
import { SERVER_URL } from '../../../config'

export function ResItem({ res }) {
  const { ID: id, Numero, Nombre, Tipo, Edad, FincaNombre, Peso } = res;

  return (
    <View style={styles.card}>
      <Link href={{
          pathname: '/Reses/[res]',
          params: { res: id }
        }}
         asChild>
        <Pressable>
          <Image
            style={styles.image}
            source={{ uri: `${SERVER_URL}/imagen/id/${id}` }}
            alt="Cow Image"
            />

          <View style={styles.cardInfo}>
              <View style={styles.especial}>
                <Text style={styles.nombre}>{Nombre}</Text>
                <NumeroRes id={id} numero={Numero} tipo={Tipo} />
              </View>
              <Text style={styles.text}><Text style={styles.label}>Edad:</Text> {daysToYearsandMonths(Edad)}</Text>
              <Text style={styles.text}><Text style={styles.label}>Ubicación:</Text> {FincaNombre}</Text>
              <Text style={styles.text}><Text style={styles.label}>Peso Actual:</Text> {Peso} </Text>
          </View>
        </Pressable>
      </Link>
    </View>
  );
}

ResItem.propTypes = {
  res: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 10,
    borderRadius: 8,
  },
  cardInfo: {
    padding: 16,
  },
  especial: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  label: {
    fontWeight: 'bold',
  },
});
