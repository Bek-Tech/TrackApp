import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './components/Spacer';
import { Context as AuthContext } from './context/AuthContext';
import AuthForm from './components/AuthForm'
import NavLink from './components/NavLink'


const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);


  return (

    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText='Sign Up'
      />
      <NavLink
        text='Already have an account? sign in.'
        routeName='SignIn'
      />



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



});

export default SignUpScreen;
