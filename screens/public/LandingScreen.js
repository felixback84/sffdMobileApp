
import React, { useLayoutEffect  } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
// navigation
import { useNavigation } from '@react-navigation/native';
// components
import HeaderShow from '../../components/public/HeaderShow'
import CardsTuts from '../../components/public/CardsTuts'
import Searcher from  '../../components/searcher/Searcher'
import Auth from  '../../components/public/Auth'
import PublicNav from '../../layout/PublicNav'

const LandingScreen = () => {
    // navigation
    const navigation = useNavigation()
    const screenHeight = Dimensions.get('window').height;  
    const boxHeight = screenHeight / 2;

    // layout
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        });
    },[]);

    return (
        <SafeAreaView className="bg-neutral-800 p-3">
            {/* body */}
            <ScrollView
                className="bg-neutral-800"
                contentContainerStyle={{
                    paddingBottom:100
                }}
            >
                {/* header show */}
                <HeaderShow/>
                {/* card tuts */}
                <CardsTuts/>
                {/* searcher */}
                <Searcher/>
                {/* auth */}
                <Auth/>
            </ScrollView>
            {/* layout nav
            <PublicNav/> */}
        </SafeAreaView>
    );
}

export default LandingScreen;
