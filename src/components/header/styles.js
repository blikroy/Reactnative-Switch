import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#181818',
        paddingVertical: 20,
    },
    titulo: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Inter-Light'
    }
})