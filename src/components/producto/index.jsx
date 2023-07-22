import {View, Text, Button, FlatList } from 'react-native'
import PRODUCTOS from '../../utils/productos.json';
import {styles} from './styles'

const Producto = ({ handleGoBack, id }) => {

    const filtroDeProdcuto = PRODUCTOS.filter((producto) => producto.categoryId === id)
    return(
        <View style={styles.container}>
            <Button title='volver' onPress={handleGoBack}></Button>
            <FlatList
                data={filtroDeProdcuto}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}
export default Producto;