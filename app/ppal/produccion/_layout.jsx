import { View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <View 
      style={{flex : 1}}
      >
      <Tabs
        screenOptions={{
          headerShown: false
        }}
        >
        <Tabs.Screen
          name="Form"
          options={{
            title: 'Formulario',
            tabBarIcon: ({ color }) => <FontAwesome5 name="clipboard-list" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Registros"
          options={{
            title: 'Registros',
            tabBarIcon: ({ color }) => <FontAwesome name="list-ul" size={24} color={color} />,
          }}
        />


      </Tabs>
    </View>
  )
}