import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Animated, TouchableOpacity} from 'react-native';
// component
import CardTut from './CardTut'

const data = [
    {
        id: '1',
        title: 'Card 1',
        description: 'Description for card 1',
        image: 'https://picsum.photos/200/200',
    },
    {
        id: '2',
        title: 'Card 2',
        description: 'Description for card 2',
        image: 'https://picsum.photos/200/200',
    },
    {
        id: '3',
        title: 'Card 3',
        description: 'Description for card 3',
        image: 'https://picsum.photos/200/200',
    },
    {
        id: '4',
        title: 'Card 4',
        description: 'Description for card 4',
        image: 'https://picsum.photos/200/200'
    }
]

const CardsTuts = () => {
    
    // layout
    const { width } = Dimensions.get('window');
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View 
            // style={styles.container} 
            className="flex-1 bg-neutral-800"
        >
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardContainer}
                keyExtractor={(item) => item.id}
                renderItem={
                    ({ item, index }) => <CardTut 
                        item={item} 
                        index={index}
                        scrollX={scrollX}
                    />
                }
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'bg-neutral-800',

    // },
    cardContainer: {
        paddingHorizontal: 100,
    },
});

export default CardsTuts;
