import { StyleSheet, Text, View, Modal, Pressable} from 'react-native'
import { useState } from 'react'

export default function ModalConfirmacion({ title, description, onConfirm, children }) {

  const [visible, setVisible] = useState(false);

    return (
      <>
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={()=>setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.cancelButton} onPress={()=>setVisible(false)}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={styles.confirmButton}
                onPress={() => {
                  onConfirm()
                  setVisible(false)
                }}
              >
                <Text style={styles.buttonText}>Aceptar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={()=>setVisible(true)}>
        {children}
      </Pressable>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
      width: '80%',
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    cancelButton: {
      flex: 1,
      backgroundColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      alignItems: 'center',
    },
    confirmButton: {
      flex: 1,
      backgroundColor: '#4caf50',
      borderRadius: 5,
      padding: 10,
      marginLeft: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });