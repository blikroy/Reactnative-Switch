import { useFonts } from 'expo-font';
import { FlatList, SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { Categoria, Header, Producto } from './components';
import CATEGORIAS from './utils/categorias.json';
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
  })

  const [categoriaClick, setCategoriaClick] = useState(false);
  const [categoriaID, setCategoriaID] = useState(null);

  const tituloHeader = categoriaClick ? 'Producto' : 'Categorías';
  const categoriaSeleccionada = (id) => {
    setCategoriaClick(!categoriaClick);
    setCategoriaID(id)
  }
  const handleGoBack = () => {
    setCategoriaClick(!categoriaClick)
    setCategoriaID(null)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header titulo={tituloHeader}/>
        {
          categoriaClick ? (
            <Producto handleGoBack={handleGoBack} id={categoriaID}/>
          ): (
            <FlatList
              style={styles.contenedorCategoria}
              contentContainerStyle={styles.listaCategoria}
              data={CATEGORIAS}
              renderItem={({item}) => <Categoria {...item} categoriaSeleccionada={categoriaSeleccionada} />}
              keyExtractor={(item)=> item.id}
            />
          )
        }
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contenedorCategoria: {

    marginHorizontal: 20,
    marginVertical: 20
  },
  listaCategoria: {
    gap: 10
  }
});
