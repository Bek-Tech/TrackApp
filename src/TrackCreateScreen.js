import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation' // sets auto msrgin on sides regarding  size  of display and  gadgets model 
import Maps from './components/Map'
const TrackCreateScreen = () => {
  return <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>TrackCreateScreen</Text>
    <Maps />
  </SafeAreaView>

};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
