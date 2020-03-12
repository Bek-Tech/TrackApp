import './_mockLocation'
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { watchPositionAsync, Accuracy } from 'expo-location'
import * as Permissions from 'expo-permissions';
import { SafeAreaView } from 'react-navigation' // sets auto margin on sides regarding  size  of display and  gadgets model 
import Maps from './components/Maps'
import { Context as LocationContext } from "./context/LocationContext"


const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    const permission = await Permissions.askAsync(Permissions.LOCATION)

    if (permission.status === 'granted') {
      setErr(null)
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation, // high battery usage 
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {

        addLocation(location)
      })
    } else {
      setErr('error')
    }
  }


  useEffect(() => {
    startWatching()
  }, [])


  return <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>TrackCreateScreen</Text>
    <Maps />
    {err ? <Text>Do not have a permission for access location services</Text> : null}

  </SafeAreaView>

};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
