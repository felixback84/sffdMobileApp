import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faCar,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'

const HeaderShow = () => {
    return (
        <View className="flex-row pb-1 items-center mx-1">
            <View className={`flex-row bg-cyan-100 border-4 border-blue-600  rounded-[40px] m-2 p-5`}>
                <View className="flex-1">
                    <Text className="text-5xl semi text-gray-500">
                        Auto show
                    </Text>
                    <Text className="font-bold selection:text-4xl text-gray-500">
                        2023
                    </Text>
                    <View className="flex-row items-center space-x-1">
                        <FontAwesomeIcon icon={faLocationDot} color="#00CCBB" />
                        <Text className="text-xl text-gray-500 ">
                            Corferias
                        </Text>
                    </View>
                    <Text className="text-xl text-gray-500 ">
                        Del 12 al 27 de diciembre
                    </Text>
                </View>

                <View className="flex-none">
                {/* show icon */}
                    <View className="bg-gray-100 border border-black p-6 rounded-full">
                        <FontAwesomeIcon icon={ faCar } size={50} color="#3d3d3d" />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default HeaderShow;
