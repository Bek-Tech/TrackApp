import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from "./context/TrackContext"

const TrackDetailsScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const id = navigation.getParam('id')
  const track = state.find(item => item._id === id)
  return <Text style={{ fontSize: 48 }}>{track.name}</Text>;
};


const styles = StyleSheet.create({});

export default TrackDetailsScreen;
