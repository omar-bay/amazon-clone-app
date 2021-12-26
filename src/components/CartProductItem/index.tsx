import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import QuantitySelector from '../QuantitySelector'

interface CartProductItemProps {    // how an item looks
    cartItem: {
        id: string,
        quantity: number,
        option?: string,
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
}

const CartProductItem = (props: CartProductItemProps) => {
    const { quantity: quantityProp, item } = props.cartItem
    const [quantity, setQuantity] = useState(quantityProp)

    return (
        <View style={styles.root}>
            <View style={styles.row}>
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
            </View>
            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            </View>
        </View>
    );
}

export default CartProductItem;
