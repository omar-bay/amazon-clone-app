import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles'
import { useRoute } from '@react-navigation/native';
import product from '../../data/product'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button'
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);

    const route = useRoute();   // learn how to get the data

    return (
        <ScrollView style={styles.root}>
            {/* title */}
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={product.images} />

            {/* Option Selector */}
            <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}>
                {
                    product.options.map((option) => (
                        <Picker.Item label={option} value={option} />
                    ))
                }
            </Picker>

            {/* Price */}
            <Text style={styles.price}>from ${product.price}
                {product.oldPrice && (<Text style={styles.oldprice}> ${product.oldPrice}</Text>)}
            </Text>

            {/* Description */}
            <Text style={styles.descripton}>{product.description}</Text>

            {/* Quantity Selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

            {/* Button */}
            <Button
            text={'Add to Cart'}
            onPress={()=>{console.warn('add to cart')}}
            containerStyles={{backgroundColor: '#e3c905'}}
            />
            <Button text={'Buy Now'} onPress={()=>{console.warn('buy now')}} />

        </ScrollView>
    );
}

export default ProductScreen;
