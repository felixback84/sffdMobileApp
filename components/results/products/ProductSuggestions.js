import React, { useState } from 'react';
import {View, Image, Text, TouchableOpacity } from 'react-native';
// navigation
import { useNavigation } from '@react-navigation/native';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faBuilding,
    faComment,
    faEllipsisVertical,
    faHeart,
} from '@fortawesome/free-solid-svg-icons'

// card width
const CARD_WIDTH = 420;

const ProductSuggestions = ({
        id,
        item,
        scrollX,
        onPress,

    }) => {
    // navigation obj
    const navigation = useNavigation()

    const dataToPass = ()=>{
        navigation.navigate("ResultScreenPublic",{
            id,
            item,
        })
    }

    // state
    const [isPressed,setIsPressed] = useState(false)
    
    // slider control
    const inputRange = [(id - 1) * CARD_WIDTH, id * CARD_WIDTH, (id + 1) * CARD_WIDTH]
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
            <Animated.View>
                {/* card */}
                <View className="flex-row bg-[#E2FFCC] border-4 border-[#70FF00] rounded-3xl h-60 w-max my-1">
                    {/* cover */}
                    <Image source={{uri:'https://picsum.photos/200/200'}} className="w-40 h-50 rounded-3xl" />
                    {/* data content */}
                    <View className='flex-column rounded-3xl h-50 my-1 p-1'>
                        {/* header icons */}
                        <View className="flex-row ml-2 items-center justify-items-end space-x-1">
                            <FontAwesomeIcon icon={faBuilding} size={35} color="#3d3d3d" />
                            <View className="bg-[#FF0000] p-3 rounded-full">
                                <Text className="text-white">
                                    30 Mts
                                </Text>
                            </View>
                            <FontAwesomeIcon icon={faEllipsisVertical} size={35} color="#3d3d3d" /> 
                        </View>
                        {/* txt content */}
                        <View className='flex-1 ml-2 justify-center'>
                            <Text className='text-lg font-bold mt-1'>{title}</Text>
                            <Text className='w-40 text-base mt-1'>{shortDescription}</Text>
                        </View>
                        {/* social */}
                        <View className="flex-row mt-1 ml-2 items-center space-x-1">
                            {/* likes */}
                            <FontAwesomeIcon icon={ faHeart } size={25} color="#3d3d3d"/>
                            <Text className="text-base text-gray-500">
                                12
                            </Text>
                            {/* comments */}
                            <FontAwesomeIcon icon={ faComment } size={25} color="#3d3d3d"/>
                            <Text className="text-base text-gray-500">
                                200
                            </Text>
                        </View>
                    </View>
                </View>
            </Animated.View>
        </TouchableOpacity>
    );
}


export default ProductSuggestions;
