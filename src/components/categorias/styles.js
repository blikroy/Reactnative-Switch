import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 10
    },
    imageBackground: {
        width: '100%',
        height: 150,
        justifyContent: 'flex-end'
    },
    nombre: {
        fontSize: 20,
        color: '#fff',
        padding: 20,
        textShadowColor: 'rgba(0,0,0, 0.75)',
        textShadowOffset: { width: -1, height: 1},
        textShadowRadius: 6,
        fontFamily: 'Inter-Regular'
    }
})