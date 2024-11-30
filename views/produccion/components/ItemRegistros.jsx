import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ModalConfirmacion from '../../../components/ModalConfirmacion'
import { DeleteProduccionIndividual } from '../../../services/produccion'

export default function ItemRegistros({body: {Fecha, Tipo, Cantidad, ResNombre, ...body}, fetch}) {

  const onDelete = async () => {
    console.log(body.ID)
    DeleteProduccionIndividual(body.ID)
    fetch()
  }

  return (
    <Pressable >
      <View style={styles.container}>
        
        {
          Tipo === 'Leche' ? 
          <Image
            source={require('../../../assets/img/milk.png')}
            style={styles.image}
          /> :
          <Image
            source={require('../../../assets/img/cow.png')}
            style={styles.image}
          />
        }
        <View style={styles.textContainer}>
          <Text style={styles.text}>{Cantidad} {Tipo === 'Leche' ? 'Lts' : 'Kg'}</Text>
          <Text style={styles.text}>{Fecha}</Text>
          <Text style={styles.text}>{ResNombre}</Text>

          <ModalConfirmacion
            title="Eliminar Registro"
            description="¿Estas seguro de eliminar este registro?"
            onConfirm={onDelete}
          >
            <View 
              style={[styles.deleteButton, { backgroundColor: '#ff4d4d' }]}
            >
              <MaterialCommunityIcons name="delete-forever" size={24} color="white" />
            </View>
          </ModalConfirmacion>
          
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 2,
    borderRadius: 8,
    gap: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#000', // Texto negro
  },
  deleteButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingVertical: 2,
    paddingHorizontal: 1,
    borderRadius: 3,
  }
})