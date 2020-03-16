// import './_mockLocation'
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation' //  SafeAreaView - sets auto margin on sides regarding  size  of display  . withNavigationFocus - gives "isFocused" prop which is returns boolean when user in this screen gives true and must be exported with screen

import Maps from './components/Maps'
import { Context as LocationContext } from "./context/LocationContext"
import useLocation from './hooks/useLocation'
import TrackForm from "./components/TrackForm"


const TrackCreateScreen = ({ isFocused }) => {
  // isLocation  = boolean

  const { state, addLocation } = useContext(LocationContext)

  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording)
    },
    [state.recording],
  )

  const [err] = useLocation(isFocused || state.recording, callback)




  return <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>TrackCreateScreen</Text>
    <Maps />
    {err ? <Text>Do not have a permission for access location services</Text> : null}
    <TrackForm />

  </SafeAreaView>

};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
