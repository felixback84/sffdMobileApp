import React, { useLayoutEffect, useRef } from 'react';
import {View, ScrollView, TouchableOpacity, Image, Text, FlatList, Dimensions, Animated} from 'react-native';
// components
import ProductSuggestions from '../../../components/results/products/ProductSuggestions'
import Comments from '../../../components/social/comments'
// navigation
import { useNavigation, useRoute } from '@react-navigation/native';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faArrowLeft,
    faBuilding,
    faComment,
    faHeart,
    faLinkedin,
    faInstagram
} from '@fortawesome/free-solid-svg-icons'

const ResultCompanyScreenPublic = () => {
    const navigation = useNavigation()
    const {
        params:{
            id,
            img,
            metadata,
            mts,
            qualityMatch,
            credentials,
            products,
            comments,
            likes,
        }       
    } = useRoute()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

    // layout
    const { width } = Dimensions.get('window');
    const scrollX = useRef(new Animated.Value(0)).current;

    
    return (
        <>
        <ScrollView className="flex-1 bg-[#3d3d3d]">
            
            {/* Header */}
            <View className="relative">
                <Image
                    source={{
                        uri:img
                    }}
                    className="w-full h-64 bg-gray-300 p-4"
                />
                <TouchableOpacity
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    onPress={navigation.goBack}
                >
                    <FontAwesomeIcon icon={faArrowLeft} size={25} color="#00CC00" />
                </TouchableOpacity>
            </View>
            {/* data pill */}
            <View className="flex-row items-center bg-[#00ff0d] rounded-full pl-4 m-1">
                <View className="flex-column m-2 mb-4">
                    <Text className="font-bold text-2xl p-1">
                        {credentials.title}
                    </Text>
                    <View className="flex-row items-center space-x-1" >
                        <FontAwesomeIcon icon={faBuilding} size={35} color="#00CC00" />
                        <View className="bg-[#FF0000] p-3 rounded-full">
                            <Text className="text-white">
                                {mts}
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="flex-column items-center pl-12">
                    <View className="flex-row items-center space-x-4">
                        <View className="flex-row items-center">
                            <FontAwesomeIcon icon={faHeart} size={35} color="#00CC00" />
                            <Text className="">5</Text>
                        </View>
                        <View className="flex-row items-center">
                            <FontAwesomeIcon icon={faComment} size={35} color="#00CC00" />
                            <Text className="">35</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* tags */}
            <View className="flex-row items-center space-x-1 bg-[#606060] p-3">
                    <Text className="text-white font-bold text-2xl mr-2">
                        Tags: 
                    </Text>
                {
                    metadata.tags.map((tag,i)=>(
                        <View index={i} className="bg-[#FF0000] p-2 rounded-full">
                            <Text className="text-white">
                                {tag}
                            </Text>
                        </View>
                    ))
                }
                
            </View>
            {/* company data */}
            <View className="flex-column space-x-1 bg-[#606060] mt-1 p-2">
                <View className="flex-row justify-start items-center space-x-1">
                    <FontAwesomeIcon icon={faInstagram} size={35} color="#00CC00" />
                    <FontAwesomeIcon icon={faLinkedin} size={35} color="#00CC00" />
                </View>
                <View className="flex-column space-x-1">
                    <Text className="">
                        <Text className="">  Website: </Text>
                            {credentials.website}
                    </Text>
                    <Text className=""> 
                        <Text className="">Headquaters:</Text>
                            {credentials.headquarters}
                    </Text>
                    <Text className="">
                        <Text className="" >Bio: </Text>
                            {credentials.shorDescription}
                    </Text>
                </View>
            </View>
            {/* products */}
            <FlatList
                data={products}
                horizontal
                showsHorizontalScrollIndicator={false}
                //contentContainerStyle={styles.cardContainer}
                keyExtractor={(item) => item.id}
                renderItem={
                    ({ item, id }) => <ProductSuggestions 
                        item={item} 
                        id={id}
                        scrollX={scrollX}
                    />
                }
            />        
            {/* social */}
            <Comments/>
        </ScrollView>
        </>
    );
}

export default ResultCompanyScreenPublic;
