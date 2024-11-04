import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';
import { NumeroRes } from '../../../components/NumeroRes';
import { daysToYearsandMonths } from "../../../utils/DaysToYearsandMonths";
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import { SERVER_URL } from '@env';

export function ResItem({ res: { ID: id, Numero, Nombre, Tipo, Edad, NumeroCrias, FincaNombre } }) {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  return (
    <View style={styles.card}>
      <Link href="/ResIndividual" asChild>
        <Image
          style={styles.image}
          source={{ uri: `${SERVER_URL}/imagen/id/${id}` }}
          alt="Cow Image"
        />
      </Link>

      <View style={styles.cardInfo}>
        <Pressable onPress={() => navigation.navigate('ResIndividual')}>
          <View style={styles.especial}>
            <Text style={styles.nombre}>{Nombre}</Text>
            <NumeroRes id={id} numero={Numero} tipo={Tipo} />
          </View>

          <Text style={styles.text}><Text style={styles.label}>N° Crias:</Text> {NumeroCrias}</Text>
          <Text style={styles.text}><Text style={styles.label}>Edad:</Text> {daysToYearsandMonths(Edad)}</Text>
          <Text style={styles.text}><Text style={styles.label}>Ubicación:</Text> {FincaNombre}</Text>
          <Text style={styles.text}><Text style={styles.label}>Peso Actual:</Text> 500kg</Text>
          <Text style={styles.text}><Text style={styles.label}>Raza:</Text> Holstein</Text>
          <Text style={styles.text}><Text style={styles.label}>Tipo:</Text> {Tipo}</Text>
        </Pressable>
      </View>
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
    height: 180,
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
