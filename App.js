import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'; // back and forward navigator
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AccountScreen from './src/AccountScreen';
import SignInScreen from './src/SignInScreen';
import SignUpScreen from './src/SignUpScreen';
import TrackCreateScreen from './src/TrackCreateScreen';
import TrackDetailsScreen from './src/TrackDetailsScreen';
import TrackListScreen from './src/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';

const switchNavigator = createSwitchNavigator ({
  loginFlow: createStackNavigator ({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  }),
  mainFlow: createBottomTabNavigator ({
    trackListFlow: createStackNavigator ({
      TrackList: TrackListScreen,
      TrackDetails: TrackDetailsScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer (switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
