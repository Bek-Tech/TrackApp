import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer'


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none" // birinchi harifni kottalashtirib quyishini uchiradi
                autoCorrect={false} // t9 ni  uchiradi
            />
            <Spacer />
            <Input
                secureTextEntry // youzuvni nuqtacha qilib kurstadi
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none" // birinchi harifni kottalashtirib quyishini uchiradi
                autoCorrect={false} // t9 ni  uchiradi
            />
            <Spacer>
                {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
                <Button
                    title={submitButtonText}
                    type="outline"
                    raised
                    onPress={() => {
                        onSubmit({ email, password })
                    }}
                />
            </Spacer>
        </>
    )

}

const styles = StyleSheet.create({
    errorStyle: {
        color: "red",
        fontSize: 17,
        marginLeft: 15,
        marginBottom: 15
    }
})

export default AuthForm