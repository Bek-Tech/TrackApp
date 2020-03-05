import { AsyncStorage } from "react-native"
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef'





const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }
    case "signup":
      return { errorMessage: '', token: action.payload }
    default:
      return state;
  }
};



const signup = dispatch => async ({ email, password }) => {
  try {

    const response = await trackerApi.post('/signup', { email, password });
    console.log(response.data)  // make request to server
    await AsyncStorage.setItem("token", response.data.token)// get and store token
    dispatch({ type: 'signup', payload: response.data.token }) // dispatch an action
    navigate('TrackList')  //  navigate to  TrackList  screen
  } catch (err) {
    console.log(err.message)
    dispatch({ type: "add_error", payload: "something went wrong" })
  }
};

const signin = dispatch => {
  return ({ email, password }) => { };
};

const signout = dispatch => {
  return () => { };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
