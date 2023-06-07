import React from 'react';
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

const CardCompanyModalResults = ({
        id,
        metadata,
        img,
        mts,
        qualityMatch,
        credentials,
        products,
        comments,
        likes,
        onPress
    }) => {
    // navigation obj
    const navigation = useNavigation()

    const dataToPass = ()=>{
        navigation.navigate("ResultCompanyScreenPublic",{ 
            id,
            metadata,
            img,
            mts,
            qualityMatch, 
            credentials,
            products,
            comments,
            likes,
        })
    }

    return (

        <>
        <TouchableOpacity 
            onPress={onPress}
            onPressOut={dataToPass}
        >
            {/* card */}
            <View className="flex-row bg-[#E2FFCC] border-4 border-[#70FF00] rounded-3xl h-60 w-max my-1">
                {/* cover */}
                <Image source={{uri:img}} className="w-40 h-50 rounded-3xl" />
                {/* data content */}
                <View className='flex-column rounded-3xl h-50 my-1 p-1'>
                    {/* header icons */}
                    <View className="flex-row ml-2 items-center justify-items-end space-x-1">
                        <FontAwesomeIcon icon={faBuilding} size={35} color="#3d3d3d" />
                        <View className="bg-[#FF0000] p-3 rounded-full">
                            <Text className="text-white">
                                {mts}
                            </Text>
                        </View>
                        <FontAwesomeIcon icon={faEllipsisVertical} size={35} color="#3d3d3d" /> 
                    </View>
                    {/* txt content */}
                    <View className='flex-1 ml-2 justify-center'>
                        <Text className='text-lg font-bold mt-1'>{credentials.title}</Text>
                        <Text className='w-40 text-base mt-1'>{credentials.shortDescription}</Text>
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
        </TouchableOpacity>
        </>
    );
}


export default CardCompanyModalResults;
