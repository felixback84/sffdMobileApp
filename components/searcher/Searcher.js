import React from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faSliders,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
// compoenents
import WordsSearcher from './WordsSearcher'
import CompaniesSearcher from './CompaniesSearcher'
import ProductsSearcher from './ProductsSearcher'
import EventsSearcher from './EventsSearcher'
import OffertsSearcher from './OffertsSearcher'

const Searcher = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                {/* search box */}
                <WordsSearcher/>
                {/* squares */}
                <View style={styles.row}>
                    {/* bussiness */}
                    <CompaniesSearcher/>
                    {/* products */}
                    <ProductsSearcher/>
                </View>
                <View style={styles.row}>
                    {/* events */}
                    <EventsSearcher/>
                    {/* offerts */}
                    <OffertsSearcher/>
                </View>
                {/* btn */}
                <TouchableOpacity 
                    className="rounded-full bg-[#00CCBB] p-4 mt-2"
                    onPress={() => navigation.navigate("")}
                >
                    <Text className="text-center text-white text-lg font-bold">
                        Find it on the show!!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        margin:10,
        padding:10,
        borderWidth: 3,
        borderColor:'#3d3d3d',
        backgroundColor: '#606060',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:40
    },
    row: {
        flexDirection: 'row',
    },
});

export default Searcher;


