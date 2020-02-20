import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <>
      <Text style={{fontSize: 48}}>SignupScreen</Text>
      <Button
          title= 'go to Sign In'
          onPress= {()=> navigation.navigate('SignIn')}
      />
          <Button
              title='go to Main Flow'
              onPress={() => navigation.navigate('mainFlow')}
          />
    </>
  );
};

const styles = StyleSheet.create ({});

export default SignUpScreen;
