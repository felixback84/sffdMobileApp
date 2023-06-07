import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
// navigation
import { useNavigation } from '@react-navigation/native';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faX,
    faMagnifyingGlass,
    faBuilding,
    faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'

const Auth = () => {
    // navigation obj
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            {/* squares */}
            <View style={styles.row}>
                {/* register */}
                <TouchableOpacity
                    style={[styles.squareBtn, styles.squareBtnSignup,]}
                    onPress={()=>{ 
                        navigation.navigate("Signup")
                    }}
                >
                    <View className="flex-1 justify-around">
                        <View className="flex-row justify-center">
                            <FontAwesomeIcon  
                                icon={ faBuilding }  
                                color="#3d3d3d" 
                                size={60}
                                style={{marginVertical:20,}}
                            />
                        </View>
                        <View className="flex-row justify-center my-2">
                            <Text className="text-xl text-neutral-800 ">SignUp</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* login */}
                <TouchableOpacity
                    style={[styles.squareBtn, styles.squareBtnLogin,]}
                    onPress={()=>{ 
                        navigation.navigate("Login")
                    }}
                >
                    <View className="flex-1 justify-around">
                        <View className="flex-row justify-center">
                            <FontAwesomeIcon  
                                icon={ faBuilding }  
                                color="#3d3d3d" 
                                size={60}
                                style={{marginVertical:20,}}
                            />
                        </View>
                        <View className="flex-row justify-center my-2">
                            <Text className="text-xl text-neutral-800">LogIn</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    squareBtn:{
        margin:10,
        padding:10,
        width: 160,
        height: 130,
        borderRadius:40,
        margin:5,
        borderWidth:5,
    },
    squareBtnSignup: {
        backgroundColor: '#EDFFBA',
        borderColor: '#DFFF83'
    },
    squareBtnLogin: {
        backgroundColor: '#FFD2D2',
        borderColor: '#FFC2C2'
    }
})

export default Auth;
