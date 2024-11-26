import { FlatList, Image, StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native'
import { useRef } from 'react'
import { SERVER_URL } from '../../../config'

export default function ListImagen({ imageIds = ['00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000005'] }) {
  const screenWidth = Dimensions.get('window').width; 
  const flatListRef = useRef(null);

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
