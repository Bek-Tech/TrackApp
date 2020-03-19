import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { NavigationEvents } from "react-navigation"
import { Context as TrackContext } from "./context/TrackContext"

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTrack } = useContext(TrackContext)
  console.log(state)
  return <>
    <NavigationEvents onWillFocus={fetchTrack} />
    <Text style={{ fontSize: 48 }}> TrackListScreen </Text>
    <Button title="Track Details" onPress={() => { navigation.navigate('TrackDetails') }} />

  </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;
