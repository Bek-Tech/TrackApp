import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button , Text} from 'react-native-elements';


const SignUpScreen = ({navigation}) => {
  return (
    <>
     <Text h3>Sign Up for Application</Text>
     <Input  label = "Email"/>
     <Input label='Password' />
          <Button
           title="Sign Up" type="outline" raised />
    </>
  );
};

const styles = StyleSheet.create ({});

export default SignUpScreen;
