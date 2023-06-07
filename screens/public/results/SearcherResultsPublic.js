import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
// navigation
import { useNavigation } from '@react-navigation/native';
// components
import Map from '../../../components/map/Map';
import ModalMapResults from '../../../components/results/ModalMapResults';

const SearcherResultsPublic = () => {
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

    return ( 
        <>  
            {/* map */}  
            <Map/> 
            <View>
                {/* modal with results */}
                <ModalMapResults type={"companies"}/>
            </View>
        </>
    ); 
};

export default SearcherResultsPublic;