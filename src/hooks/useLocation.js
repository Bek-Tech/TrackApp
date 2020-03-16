import React, { useState, useEffect } from 'react'
import { watchPositionAsync, Accuracy } from 'expo-location'
import * as Permissions from 'expo-permissions';


export default (shouldStart, callback) => {
    // shouldStart=== boolean  , callback === ()=>{}
    const [err, setErr] = useState(null);
    const [sub, setSub] = useState(null)

    const startWatching = async () => {
        const permission = await Permissions.askAsync(Permissions.LOCATION)

        if (permission.status === 'granted') {
            setErr(null)
            const subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation, // high battery usage 
                timeInterval: 1000,
                distanceInterval: 10
            },
                callback
            )
            setSub(subscriber)
        } else {
            setErr('error')
        }
    }


    useEffect(() => {
        if (shouldStart) {
            startWatching()
        } else {
            sub.remove()// stop tracking
            setSub(null)
        }
        // clean up function that solves issue with rerendering startWatching 10 times
        return () => {
            if (sub) {
                sub.remove()
            }
        }

    }, [shouldStart, callback])

    return [err]  // returning an array is convention  for reusable hooks
}