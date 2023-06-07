import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
// components
import CardCompanyModalResults from './companies/CardCompanyModalResults'
import CardProductModalResults from './products/CardProductModalResults'
import CardEventModalResults from './events/CardEventModalResults'
import CardOffertModalResults from './offerts/CardOffertModalResults'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faChevronDown,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
// data
import dummyData from '../../dummyData';


const ModalMapResults = ({type}) => {

    // modal state
    const [modalVisible, setModalVisible] = useState(false);
    // card click
    const [cardClicked, setCardStateOfClick] = useState(false);
    const cardStateOfClick = () => {
        setCardStateOfClick(true)
        setModalVisible(!modalVisible);
    }

    const pi = (type) => {
        switch(type){
            case "companies":
                dummyData.companies.map((item,i)=>(
                    <CardCompanyModalResults
                        id={item.companies.id}
                        metadata={item.companies.metadata}
                        qualityMatch={item.companies.metrics.qualityMatch}
                        mts={item.companies.metrics.mts}
                        credentials={item.companies.credentials}
                        products={item.companies.products}
                        comments={item.companies.networking.comments}
                        likes={item.companies.networking.likes}
                        onPress={cardStateOfClick}
                    />
                ))
            break;
            case "products":
                dummyData.products.map((item,i)=>(
                    <CardProductModalResults
                        id={item.companies.id}
                        metadata={item.companies.metadata}
                        qualityMatch={item.companies.metrics.qualityMatch}
                        mts={item.companies.metrics.mts}
                        credentials={item.companies.credentials}
                        products={item.companies.products}
                        comments={item.companies.networking.comments}
                        likes={item.companies.networking.likes}
                        onPress={cardStateOfClick}
                    />
                ))
            break;
            case "events":
                dummyData.map((item,i)=>(
                    <CardEventModalResults
                        id={item.companies.id}
                        metadata={item.companies.metadata}
                        qualityMatch={item.companies.metrics.qualityMatch}
                        mts={item.companies.metrics.mts}
                        credentials={item.companies.credentials}
                        products={item.companies.products}
                        comments={item.companies.networking.comments}
                        likes={item.companies.networking.likes}
                        onPress={cardStateOfClick}
                    />
                ))
            break;
            case "offerts":
                dummyData.map((item,i)=>(
                    <CardOffertModalResults
                        id={item.companies.id}
                        metadata={item.companies.metadata}
                        qualityMatch={item.companies.metrics.qualityMatch}
                        mts={item.companies.metrics.mts}
                        credentials={item.companies.credentials}
                        products={item.companies.products}
                        comments={item.companies.networking.comments}
                        likes={item.companies.networking.likes}
                        onPress={cardStateOfClick}
                    />
                ))
            break;
        }
    }
    
    return (
        <>
            <View style={styles.container}>
                {/* body modal */}
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
                                    className="rounded-full bg-gray-100 p-3"
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <FontAwesomeIcon icon={faChevronDown} size={20} color="#3d3d3d" />   
                                </TouchableOpacity>

                                <ScrollView className="mt-6">
                                    {/* cards */}
                                    {pi()}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* launcher btn */}
                <TouchableOpacity
                    style={styles.container}
                    className="h-10 w-20 rounded-full bg-gray-400 p-5 mb-20"
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <FontAwesomeIcon icon={faChevronUp} size={30} color="#3d3d3d" />   
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    // modal
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        marginTop:300,
        marginBottom:-30,
        backgroundColor: '#3d3d3d',
        borderWidth:5,
        borderColor:'#D9D9D9',
        borderRadius: 40,
        padding: 10,
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
});

export default ModalMapResults;

