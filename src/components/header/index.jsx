import { View, Text } from 'react-native'
import {styles} from './styles'

const Header = ( {titulo}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    );
}
export default Header;