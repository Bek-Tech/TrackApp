import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from './context/AuthContext'


const LoadingScreen = () => {
    const { state, localSignin } = useContext(AuthContext)

    useEffect(() => {
        localSignin();
    }, [])

    return null
}

export default LoadingScreen