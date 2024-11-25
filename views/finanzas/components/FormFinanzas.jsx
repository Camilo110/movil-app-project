import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import { InputDate, InputNumber, InputSelect, InputText } from '../../../components/Inputs'

export default function FormFinanzas() {
  return (
    <View>
      <ScrollView>
        <Text>Registar Movimiento</Text>
        <Pressable>
          <Text>Ingreso | Egreso</Text>
        </Pressable>

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
          label={'descripcion'}
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
          
          <Pressable>
            <Text>
              Agregar Producto
            </Text>
          </Pressable>
        
        </View>

        <View>
          <Text>
            Productos Seleccionados
          </Text>

          <View>
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
            <Text>
              Nombre Producto  Cantidad Delete
            </Text>
          </View>
        </View>
      </ScrollView>

      <Pressable>
        <Text>
          Guardar
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})