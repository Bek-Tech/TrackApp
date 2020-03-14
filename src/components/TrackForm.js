import React from "react"
import { Input, Button } from "react-native-elements"
import Spacer from "../components/Spacer"


const TrackForm = () => {
    return <>
        <Spacer>
            <Input />
        </Spacer>
        <Button
            type="outline"
            raised
            title="Record" />

    </>
}

export default TrackForm
