import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white'
    },
    title: {
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldprice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    },
    descripton: {
        marginVertical: 10,
        lineHeight: 20
    }
});

export default styles