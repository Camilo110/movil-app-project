import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import { InputDate, InputNumber, InputSelect, InputText } from '../../../components/Inputs'
import SplitSwitchButton from './button'
import { useState } from 'react'
import ItemRegistro from '../../../components/itemRegistro'

export default function FormFinanzas() {

  const [addProducts, setAddProducts] = useState(false)

  const onEditProducs = () => {
    setAddProducts(!addProducts)
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Registar Movimientos</Text>

        <SplitSwitchButton />

        <InputNumber
          label='Monto'
          placeholder='Monto'
          value={0}
        />

        <InputDate
          label='Fecha'
          placeholder='Fecha'
          value={''}
        />

        <InputText
          label={'Descripcion'}
          placeholder='descripcion'
          value={''}
        />

        <InputSelect
          label={'Cliente'}
          data={[{ label: 'Cliente1', value: 'Cliente1' }, { label: 'Cliente2', value: 'Cliente2' }, { label: 'Cliente3', value: 'Cliente3' }, { label: 'Cliente4', value: 'Cliente4' }]}
          value={''}
        />

        <InputText
          label={'Observaciones'}
          placeholder='Observaciones'
          value={''}
        />

        <View>
          <View>
            <InputSelect
              label={'Producto'}
              data={[{ label: 'Producto1', value: 'Producto1' }, { label: 'Producto2', value: 'Producto2' }, { label: 'Producto3', value: 'Producto3' }, { label: 'Producto4', value: 'Producto4' }]}
              value={''}            
            />

            <InputNumber
              label='Cantidad'
              placeholder='Cantidad'
              value={0}
            />

            <InputNumber
              label='Precio Unitario'
              placeholder='Precio Unitario'
              value={0}
            />
          </View>
          
          <Pressable onPress={onEditProducs}>
            <Text>
              Agregar Productos
            </Text>
          </Pressable>
        
        </View>

        { addProducts &&
          <View>
            <Text>
              Productos Seleccionados
            </Text>

            <View>
              <ItemRegistro 
                data={{Nombre: 'Nombre Producto', Numero: 'sss',Cantidad: 'sss'}}
                keyTitle1={'Nombre'}
                keyTitle2={'Numero'}
                restKeys={['Cantidad']}
                labels={['Cantidad']}
                onDelete={()=>{}}
              />
              <Text>
                Nombre Producto  Cantidad Delete
              </Text>
              <Text>
                Nombre Producto  Cantidad Delete
              </Text>
              <Text>
                Nombre Producto  Cantidad Delete
              </Text>
              <Text>
                Nombre Producto  Cantidad Delete
              </Text>
              <Text>
                Nombre Producto  Cantidad Delete
              </Text>
              <Text>
                Nombre Producto  Cantidad Delete
              </Text>
            </View>
          </View>

        }
      </ScrollView>

      <Pressable style={styles.button}>
        <Text style={styles.textStyle}>
          Guardar
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'start',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  button: {
    borderRadius: 20,
    padding: 13,
    elevation: 2,
    marginHorizontal: 20,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "500",
    textAlign: "center",
    fontSize: 16
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20
  }
})