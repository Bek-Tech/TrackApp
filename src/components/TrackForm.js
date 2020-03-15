import React, { useContext } from "react"
import { Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { Context as LocationContext } from "../context/LocationContext"

const TrackForm = () => {

    const { state: { name, recording, locations }, changeName, startRecording, stopRecording } = useContext(LocationContext)

    // console.log(locations.length)
    return <>
        <Spacer>
            <Input
                value={name}
                onChangeText={changeName}
                placeholder="Enter Track Name" />
        </Spacer>
        {recording
            ? <Button onPress={stopRecording} type="outline" raised title=" Stop" />
            : <Button onPress={startRecording} type="outline" raised title="Record" />}


    </>
}

export default TrackForm
