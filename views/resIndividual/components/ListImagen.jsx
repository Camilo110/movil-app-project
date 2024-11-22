import { FlatList, Image, StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native'
import { useRef, useState } from 'react'
import { SERVER_URL } from '../../../config'

export default function ListImagen({ imageIds = ['00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000005'] }) {
  const screenWidth = Dimensions.get('window').width;  // Ancho de la pantalla
  const [currentIndex, setCurrentIndex] = useState(0);  // Estado para el índice actual
  const flatListRef = useRef(null);

  // Función para moverse a la imagen siguiente
  const handleNext = () => {
    if (currentIndex < imageIds.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  // Función para moverse a la imagen anterior
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const renderImage = ({ item }) => (
    <View style={[styles.imageContainer, { width: screenWidth }]}>
      <Image
        style={styles.image}
        source={{ uri: `${SERVER_URL}/imagen/id/${item}` }}
        alt="Cow Image"
      />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>

      <FlatList
        ref={flatListRef}
        data={imageIds}
        renderItem={renderImage}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="normal"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  disabledText: {
    color: 'gray'
  },
});
