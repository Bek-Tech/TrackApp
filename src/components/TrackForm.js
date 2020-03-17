import React, { useContext } from "react"
import { Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"
import { Context as LocationContext } from "../context/LocationContext"
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {

    const { state: { name, recording, locations }, changeName, startRecording, stopRecording } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
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
        <Spacer>
            {!recording && locations.length
                ? <Button
                    title=" Save Track"
                    type="outline" raised
                    onPress={saveTrack}
                />
                : null
            }</Spacer>


    </>
}

export default TrackForm
