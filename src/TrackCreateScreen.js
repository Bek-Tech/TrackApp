import './_mockLocation'
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation' //  SafeAreaView - sets auto margin on sides regarding  size  of display  . withNavigationFocus - gives "isFocused" prop which is returns boolean when user in this screen gives true and must be exported with screen

import Maps from './components/Maps'
import { Context as LocationContext } from "./context/LocationContext"
import useLocation from './hooks/useLocation'


const TrackCreateScreen = ({ isFocused }) => {
  // isLocation  = boolean

  const { addLocation } = useContext(LocationContext)


  const [err] = useLocation(isFocused, addLocation)  // (location)=>{addLocation(location)}




  return <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>TrackCreateScreen</Text>
    <Maps />
    {err ? <Text>Do not have a permission for access location services</Text> : null}

  </SafeAreaView>

};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
