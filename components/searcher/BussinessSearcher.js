import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native';
// components
import WordsSearcher from './WordsSearcher';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faX,
    faMagnifyingGlass,
    faBuilding,
    faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons'

const BussinesSearcher = () => {
    // modal state
    const [modalVisible, setModalVisible] = useState(false);
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
                                <FontAwesomeIcon icon={faX} size={30} color="#3d3d3d" />
                            </TouchableOpacity>
                            {/* bussines icon */}
                            <FontAwesomeIcon  
                                icon={ faMagnifyingGlass }  
                                color="gray" 
                                size={60}
                                style={{marginBottom:20}}
                            />
                            {/* title searcher */}
                            <Text className="text-5xl text-gray-500">
                                Bussiness
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
                        <FontAwesomeIcon  
                            icon={ faBuilding }  
                            color="#3d3d3d" 
                            size={60}
                            style={{marginVertical:20,}}
                        />
                    </View>
                    <View className="flex-row justify-center my-2">
                        <Text className="text-xl text-white ">Bussiness</Text>
                    </View>
                    <View className="flex-row justify-center">
                        <FontAwesomeIcon  
                            icon={ faArrowCircleRight }  
                            color="#3d3d3d" 
                            size={40}
                            style={{marginVertical:20,}}
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
        width: 160,
        height: 180,
        borderRadius:40,
        backgroundColor: '#FFD2D2',
        margin:5,
        borderWidth:5,
        borderColor: '#FFC2C2'
    },
});

export default BussinesSearcher;