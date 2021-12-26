import { template } from '@babel/core';
import React, {useState, useCallback} from 'react';
import {
    View, 
    Image, 
    StyleSheet, 
    FlatList,
    useWindowDimensions
} from 'react-native';

const ImageCarousel = ({ images }: {images: string[]}) => {
    const windowWidth = useWindowDimensions().width;
    const [activeIndex, setActiveIndex] = useState(0);

    const onFlatListUpdate = useCallback(({viewableItems}) => {
        if(viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
        console.log(viewableItems)
    }, [])

    return (
        <View style={styles.root}>
            {/* images */}
            <FlatList
            data={images}
            renderItem={({item}) => (
                <Image
                style={[styles.image, { width: windowWidth-20 }]}
                source={{ uri: item }} />
            )}
            horizontal
            showsHorizontalScrollIndicator= {false}
            // center scroll
            snapToInterval={windowWidth - 5}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
            // dot tracing
            viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50,
            }}
            onViewableItemsChanged={onFlatListUpdate}
            />

            {/* dots */}
            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View
                    style={[styles.dot, { 
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed' 
                    }]}
                    key={index}
                    />
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    root: {},
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain'
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#ededed',
        margin: 5
    }
})

export default ImageCarousel;
