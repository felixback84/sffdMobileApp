import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native';
// navigation
import { useNavigation } from '@react-navigation/native';
// components
import WordsSearcher from './WordsSearcher';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome' 
import { faX, faMagnifyingGlass, faBuilding, faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'
// radiobutton
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

const CompaniesSearcher = () => {
    // navigation obj
    const navigation = useNavigation()
    // modal state
    const [modalVisible, setModalVisible] = useState(false)
    // radio btn stuff
    let radio_props = [
        {value: 0 },
    ];
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        {/* header modal */}
                        <View style={styles.container}>
                            {/* close btn */}
                            <TouchableOpacity
                                className="rounded-full bg-gray-100 p-3 absolute top-1 right-1"
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <FontAwesomeIcon icon={faX} size={20} color="#3d3d3d" />
                            </TouchableOpacity>
                            {/* bussines icon */}
                            <FontAwesomeIcon  
                                icon={ faBuilding }  
                                color="gray" 
                                size={60}
                                style={{marginBottom:20}}
                            />
                            {/* title searcher */}
                            <Text className="text-5xl text-gray-500">
                                Companies
                            </Text>
                            {/* description searcher */}
                            <Text style={styles.modalText}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                            {/* form to bussines */}
                            <WordsSearcher/>
                            <WordsSearcher/>
                            <WordsSearcher/>
                            <WordsSearcher/>
                            {/* btn */}
                            <TouchableOpacity 
                                className="rounded-full bg-[#00CCBB] p-4 mt-2"
                                onPress={() => {
                                    navigation.navigate("SearcherResultsPublic")
                                    setModalVisible(!modalVisible)
                                }}
                            >
                                <Text className="text-center text-white text-lg font-bold">
                                    Search
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal>

            {/* to open modal */}
            <TouchableOpacity
                style={[styles.squareBtn,]}
                onPress={() => setModalVisible(true)}>
                <View className="flex-1 justify-around">
                    <View className="flex-row justify-center">
                        <RadioForm
                            className="absolute top-6 right-0"
                            radio_props={radio_props}
                            initial={0}
                            // onPress={(value) => {this.setState({value:value})}}
                        />
                        <FontAwesomeIcon  
                            icon={ faBuilding }  
                            color="#3d3d3d" 
                            size={50}
                            style={{marginVertical:50,}}
                        />
                    </View>
                    <View className="flex-row justify-center mb-12">
                        <Text className="text-xl text-neutral-800">Companies</Text>
                    </View>
                    <View className="flex-row justify-center">
                        <FontAwesomeIcon  
                            icon={ faArrowCircleRight }  
                            color="#3d3d3d" 
                            size={30}
                            style={{marginBottom:20,}}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        marginTop: 60,
        marginHorizontal:10,
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headerModal:{
        marginTop: 100,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginVertical: 15,
        textAlign: 'center',
    },
    squareBtn: {
        margin:10,
        padding:10,
        paddingRight:5,
        paddingTop:5,
        width: 160,
        height: 180,
        borderRadius:40,
        backgroundColor: '#FFD2D2',
        margin:5,
        borderWidth:5,
        borderColor: '#FFC2C2'
    },
});

export default CompaniesSearcher;