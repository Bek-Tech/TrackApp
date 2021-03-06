import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from "react-navigation"
import { Context as TrackContext } from "./context/TrackContext"
import { ListItem } from "react-native-elements"

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTrack } = useContext(TrackContext)
  return <>
    <NavigationEvents onWillFocus={fetchTrack} />
    <Text style={{ fontSize: 48 }}> TrackListScreen </Text>
    <FlatList
      data={state}
      keyExtractor={item => item._id}
      renderItem={({ item }) => {
        return <TouchableOpacity onPress={() => navigation.navigate("TrackDetails", { id: item._id })}>
          <ListItem chevron title={item.name} />
        </TouchableOpacity>
      }}
    />

  </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;
