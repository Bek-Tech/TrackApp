import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Text} from 'react-native-elements';
import Spacer from './components/Spacer';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Application</Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" type="outline" raised />
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

const styles = StyleSheet.create ({
  container: {
    flex: 1, //  chegarani iloji boricha kottalashtiradi
    justifyContent: 'center', //  chegara kottalashganidan kegin ichidage elementlarni  o`rtaga joylashtiradi
    marginBottom: 200,
  },
});

export default SignUpScreen;
