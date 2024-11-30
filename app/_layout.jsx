import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Puedes usar otra colección si lo prefieres

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Home',
            title: 'Proganadero',
          }}
        />
        <Drawer.Screen
          name="Reses" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Animales',
            title: 'Animales',
          }}
        />
         <Drawer.Screen
          name="produccion" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Producción',
            title: 'Producción',
          }}
        />
         <Drawer.Screen
          name="Reproduccion" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Reproducción',
            title: 'Reproducción',
          }}
        />
         <Drawer.Screen
          name="Servicio" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Servicios',
            title: 'Servicios',
          }}
        />
         <Drawer.Screen
          name="secado" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Secado',
            title: 'Secado',
          }}
        />
         <Drawer.Screen
          name="Finanzas" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Finanzas',
            title: 'Finanzas',
          }}
        />
         <Drawer.Screen
          name="insumos" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Insumos',
            title: 'Insumos',
          }}
        />
        <Drawer.Screen
          name="fincas" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Fincas',
            title: 'Fincas',
          }}
        />
         <Drawer.Screen
          name="usuario" // This is the name of the page and must match the url from root
          options={{
            drawerIcon: ({ size }) => (
              <Image
                source={require('../assets/favicon.png')} // Ruta de tu imagen
                style={{ width: size, height: size, resizeMode: 'contain' }} // Ajusta el tamaño del icono
              />
            ),
            drawerLabel: 'Usuario',
            title: 'Usuario',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
})
