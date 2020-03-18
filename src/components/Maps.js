import React, { useContext } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from "react-native-maps"
import { Context as LocationContext } from "../context/LocationContext"

const Maps = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
    }
    return <MapView
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        style={styles.map} >
        <Circle
            center={currentLocation.coords}
            radius={15}
            strokeColor='blue'
            fillColor="#4FB6BB"
        />
        <Polyline coordinates={locations.map(locArray => locArray.coords)} />
    </MapView>

};

const styles = StyleSheet.create({
    map: {
        height: 280
    }
});

export default Maps