import {TouchableHighlight, ImageBackground, Text } from 'react-native'
import {styles} from './styles'

const Categorias = ({ id, name, backgroundColor, backgroundImage, categoriaSeleccionada }) => {
    return(
        <TouchableHighlight onPress={()=> categoriaSeleccionada(id)} style={[styles.container, {backgroundColor}]}>
            <ImageBackground source={{ uri: backgroundImage }} style={styles.imageBackground} resizeMode='cover'>
                <Text style={styles.nombre}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
    );
}
export default Categorias;