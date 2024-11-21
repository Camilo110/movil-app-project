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
        />

        <InputDate
          label='Fecha'
          placeholder='Fecha'
        />

        <InputText
          label={'descripcion'}
          placeholder='descripcion'
        />

        <InputSelect
          label={'Cliente'}
          data={[{ label: 'Cliente1', value: 'Cliente1' }, { label: 'Cliente2', value: 'Cliente2' }, { label: 'Cliente3', value: 'Cliente3' }, { label: 'Cliente4', value: 'Cliente4' }]}
        />

        <InputText
          label={'Observaciones'}
          placeholder='Observaciones'
        />

        <View>
          <View>
            <InputSelect
              label={'Producto'}
              data={[{ label: 'Producto1', value: 'Producto1' }, { label: 'Producto2', value: 'Producto2' }, { label: 'Producto3', value: 'Producto3' }, { label: 'Producto4', value: 'Producto4' }]}
            />

            <InputNumber
              label='Cantidad'
              placeholder='Cantidad'
            />

            <InputNumber
              label='Precio Unitario'
              placeholder='Precio Unitario'
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