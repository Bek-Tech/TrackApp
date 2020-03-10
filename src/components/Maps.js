import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from "react-native-maps"

const Maps = () => {
    return <MapView
        initialRegion={{
            latitude: 37.33233,
            longitude: -122.03121,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        style={styles.map} />

};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Maps