import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation'
import AuthForm from './components/AuthForm'
import NavLink from './components/NavLink'
import { Context as AuthContext } from './context/AuthContext';

const SignInScreen = () => {



  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign Up for Your Account'
        errorMessage={state.errorMessage}
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
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
})


export default SignInScreen;
