import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products'

interface HomeScreenProps {
    searchValue: string
}
const HomeScreen = ({ searchValue }: HomeScreenProps) => {
    return (
        <View style={styles.page}>
            
            {/* render products */}
            <FlatList
            data={products}
            renderItem={({item}) => (<ProductItem item={item}/>)}
            showsVerticalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    },
});

export default HomeScreen;
