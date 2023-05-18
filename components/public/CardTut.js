import React, { useState } from 'react';
import {View, StyleSheet, Animated, Image, Text, TouchableOpacity } from 'react-native';
// card width
const CARD_WIDTH = 350;

const CardTut = ({item,index,scrollX}) => {
    // state
    const [isPressed,setIsPressed] = useState(false)
    
    // slider control
    const inputRange = [(index - 1) * CARD_WIDTH, index * CARD_WIDTH, (index + 1) * CARD_WIDTH]
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
    })
 
    return (
        <TouchableOpacity
            onPress={() => setIsPressed(!isPressed)} 
            className={`bg-[#FFBABA] border border-[#FFBABA] rounded-[40px] mx-1 ${
                isPressed && "border-b-0" 
            }`}
        >
            <Animated.View style={[styles.card, ]}>
                <Image source={{uri:item.image}} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_WIDTH / 2,
        backgroundColor: "#FFBABA",
        borderRadius: 30,
        marginHorizontal: 10,
        overflow: 'hidden',
        //elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        width: '100%',
        height: '70%',
        resizeMode: 'cover',
        borderRadius: 30,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default CardTut;
