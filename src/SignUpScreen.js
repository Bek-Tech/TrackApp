import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Text } from 'react-native-elements';
import Spacer from './components/Spacer';
import { Context as AuthContext } from './context/AuthContext';
import { navigate } from './navigationRef';

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Application</Text>
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
        {state.errorMessage ? <Text style={styles.errorStyle}>{state.errorMessage}</Text> : null}
        <Button
          title="Sign Up"
          type="outline"
          raised
          onPress={() => {
            signup({ email, password })
          }}
        />
      </Spacer>
    </View>
  );
};
SignUpScreen.navigationOptions = () => {
  return {
    // header : null     // old way , it will be removed in new versions soon
    headerShown: false, //  changed doe to update of react native
  };
}; //  bu funksiya teppadegei header ni uchiradi    , buni funksiyaga bog`lamasdan objekt qilsayam buladi

const styles = StyleSheet.create({
  container: {
    flex: 1, //  chegarani iloji boricha kottalashtiradi
    justifyContent: 'center', //  chegara kottalashganidan kegin ichidage elementlarni  o`rtaga joylashtiradi
    marginBottom: 200, // without margin keyboard will close signup button while typing procces on input
  },
  errorStyle: {
    color: "red",
    fontSize: 17,
    marginLeft: 15,
    marginBottom: 15
  }
});

export default SignUpScreen;
