import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { requestPermissionsAsync } from 'expo-location'
import * as Permissions from 'expo-permissions';
import { SafeAreaView } from 'react-navigation' // sets auto msrgin on sides regarding  size  of display and  gadgets model 
import Maps from './components/Maps'


const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    const location = await Permissions.askAsync(Permissions.LOCATION)
    if (location.status !== 'granted') {
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
