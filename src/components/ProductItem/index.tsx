import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/core';
import styles from './styles'

interface ProductItemProps {    // how an item looks
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice: number
    }
}

const ProductItem = (props: ProductItemProps) => {
    const { item } = props
    const navigation = useNavigation();

    const onPress = () => {
        console.warn('Item pressed')
        navigation.navigate('ProductDetails', {id: item.id});  // name of the stack screen
    }

    return (
        <Pressable onPress={onPress} style={styles.root}>
            {/* product image */}
            <Image
            style={styles.image}
            source={{uri: item.image}}
            />
            {/* product description */}
            <View style={styles.rightContainer}>
                {/* title */}
                <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                {/* ratings */}
                <View style={styles.ratingsContainer}>
                    {[0,0,0,0,0].map((element, index) => (
                        <FontAwesome
                        key={`${item.id}-${index}`}
                        style={styles.star}
                        name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                        size={18}
                        color={"#e47911"} />
                    ))

                    }
                    <Text>{item.ratings}</Text>
                </View>
                {/* price */}
                <Text style={styles.price}>from ${item.price}
                    {item.oldPrice && (<Text style={styles.oldprice}> ${item.oldPrice}</Text>)}
                </Text>
            </View>
        </Pressable>
    );
}

export default ProductItem;
