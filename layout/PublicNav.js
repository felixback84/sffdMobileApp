import React, { useLayoutEffect  } from 'react';
import {View, StyleSheet, Pressable, Text } from 'react-native';
// navigation
import { useNavigation } from '@react-navigation/native';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faHouse,
    faBolt,
    faShop
} from '@fortawesome/free-solid-svg-icons'

const PublicNav = () => {
    // navigation obj
    const navigation = useNavigation()
    return (
        <View style={styles.NavContainer}>
            <View style={styles.NavBar}>
                {/* Landing */}
                <Pressable>
                    <FontAwesomeIcon icon={faHouse} size={35} color="#3d3d3d" />
                    <Text className="text-xl text-gray-500 ">
                        Home
                    </Text>
                </Pressable>
                {/* Show */}
                <Pressable
                    onPress={()=>{ 
                        
                    }}
                >
                    <FontAwesomeIcon icon={faBolt} size={35} color="#3d3d3d" />
                    <Text className="text-xl text-gray-500 ">
                        Today
                    </Text>
                </Pressable>
                {/* Today */}
                <Pressable>
                    <FontAwesomeIcon icon={faShop} size={35} color="#3d3d3d" />
                    <Text className="text-xl text-gray-500 ">
                        Show
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    NavContainer:{
        // backgroundColor: 'rgba(52, 52, 52, 0.0)',
        alignItems:'center',
        bottom:20
    },
    NavBar:{
        flexDirection:'row',
        paddingTop:10,
        backgroundColor:'#D9D9D9',
        width:'92%',
        height:80,
        borderWidth:5,
        justifyContent:'space-around',
        borderRadius:40,
        borderColor: '#DFFF83'
    }
})

export default PublicNav;
