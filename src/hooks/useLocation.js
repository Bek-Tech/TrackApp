import React, { useState, useEffect } from 'react'
import { watchPositionAsync, Accuracy } from 'expo-location'
import * as Permissions from 'expo-permissions';


export default (callback) => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        const permission = await Permissions.askAsync(Permissions.LOCATION)

        if (permission.status === 'granted') {
            setErr(null)
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation, // high battery usage 
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            )
        } else {
            setErr('error')
        }
    }


    useEffect(() => {
        startWatching()
    }, [])

    return [err]  // returning an array is convention  for reusable hooks, can be use obj  or not use 
}