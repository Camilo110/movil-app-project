import React from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';
import PropTypes from 'prop-types';

export const CardDashboard = ({ title, info, icon= 'animales' }) => {
  const uri = require(`../../../assets/icons/animales.png`)
  return (
    <View style={styles.card}>
      <View style={styles.containerTitle}>
      <Image
            style={styles.image}
            source={uri}
            alt="Cow Image"
      />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

CardDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  iconName: PropTypes.string, // Nombre del ícono opcional
};

CardDashboard.defaultProps = {
  iconName: 'information-outline', // Ícono predeterminado
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
    margin: 10,
    borderColor: '#6994c5',
    borderWidth: 2,
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 8,
  },
  icon: {
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  info: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
