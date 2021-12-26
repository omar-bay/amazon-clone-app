import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart'
import Button from '../../components/Button';

const ShoppingCartScreen = () => {
    const totalPrice = products.reduce((summedPrice, product) => (
        summedPrice + product.item.price * product.quantity
    ), 0)

    const navigation = useNavigation();
    const onCheckOut = () => {
        navigation.navigate('Address');
    }


    return (
        <View style={styles.page}>
            {/* toppings */}
            <View>
                <Text style={{fontSize: 18}}>Subtotal ({products.length} items): 
                    <Text style={{color: '#e47911', fontWeight: 'bold'}}> ${totalPrice.toFixed(2)}</Text>
                </Text>
                <Button
                text="Proceed to CheckOut"
                onPress={onCheckOut}
                containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b782'}}
                />
            </View>
            
            {/* render products */}
            <FlatList
            data={products}
            renderItem={({item}) => (
                <CartProductItem cartItem={item}/>
                // quantity selector
            )}
            showsVerticalScrollIndicator={false}
            // ListHeaderComponent={()=>{}}   // make header component scroll with items
            />

        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
});

export default ShoppingCartScreen;
