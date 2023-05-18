import React from 'react';
import {View, StyleSheet,TextInput} from 'react-native';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faSliders,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

const WordsSearcher = () => {
    return (
        <View className="flex-row items-center space-x-2 p-1 mb-1">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-full">
                <FontAwesomeIcon  icon={ faMagnifyingGlass }  color="gray" size={30}/>
                <TextInput
                    placeholder="What are you looking for?"
                    keyboardType="default"
                />
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default WordsSearcher;
