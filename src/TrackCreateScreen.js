import './_mockLocation'
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation' // sets auto margin on sides regarding  size  of display and  gadgets model 
import Maps from './components/Maps'
import { Context as LocationContext } from "./context/LocationContext"
import useLocation from './hooks/useLocation'


const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)


  const [err] = useLocation(addLocation)  // (location)=>{addLocation(location)}




  return <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>TrackCreateScreen</Text>
    <Maps />
    {err ? <Text>Do not have a permission for access location services</Text> : null}

  </SafeAreaView>

};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
