import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from './components/AuthForm'
import NavLink from './components/NavLink'
import { Context as AuthContext } from './context/AuthContext';

const SignInScreen = () => {

  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for Your Account'
        errorMessage=''
        onSubmit={signin}
        submitButtonText='Sign In'
      />
      <NavLink
        text='Don`t have an account? sign up'
        routeName='SignUp'
      />



    </View>
  )
}
SignInScreen.navigationOptions = {
  headerShown: false
};


const styles = StyleSheet.create({
  container: {
    flex: 1, //  chegarani iloji boricha kottalashtiradi
    justifyContent: 'center', //  chegara kottalashganidan kegin ichidage elementlarni  o`rtaga joylashtiradi
    marginBottom: 200, // without margin keyboard will close signup button while typing procces on input
  },
})


export default SignInScreen;
