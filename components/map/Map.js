import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
// MapView
import MapView, { Marker } from 'react-native-maps';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { 
    faArrowLeft,
    faX
} from '@fortawesome/free-solid-svg-icons'

const Map = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View className="relative">
                <TouchableOpacity
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
                    //onPress={navigation.goBack}
                >
                    <FontAwesomeIcon icon={faArrowLeft} size={30} color="#3d3d3d" />
                </TouchableOpacity>
            </View>
            {/* map */}
            <MapView 
                style={styles.map}
                mapType='mutedStandard'
                initialRegion={{
                    latitude:4.647262,
                    longitude:-74.062604,
                    latitudeDelta:0.005,
                    longitudeDelta:0.005
                }}
            >
                <Marker
                    coordinate={{ 
                        latitude:4.647262,
                        longitude:-74.062604, 
                    }}
                    title="Marker Title"
                    description="Marker Description"
                /> 
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

export default Map;
