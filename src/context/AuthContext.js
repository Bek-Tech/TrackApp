import { AsyncStorage } from "react-native"
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef'





const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'sign_out':
      return { token: null, errorMessage: '' }
    default:
      return state;
  }
};

const localSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  }
  else {
    navigate('SignUp')
  }
}




const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password }) => {
  try {

    const response = await trackerApi.post('/signup', { email, password });  // make request to server
    await AsyncStorage.setItem("token", response.data.token)// get and store token
    dispatch({ type: 'signin', payload: response.data.token }) // dispatch an action
    navigate('TrackList')  //  navigate to  TrackList  screen
  } catch (err) {
    dispatch({ type: "add_error", payload: "something went wrong" })
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {

    const response = await trackerApi.post('/signin', { email, password });  // make request to server
    await AsyncStorage.setItem("token", response.data.token)// get and store token
    dispatch({ type: 'signin', payload: response.data.token }) // dispatch an action
    navigate('TrackList')  //  navigate to  TrackList  screen
  } catch (err) {

    dispatch({ type: "add_error", payload: "something went wrong with sign in" })
  }
};


const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token")
  dispatch({ type: 'sign_out' })
  navigate('SignUp')
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, localSignin },
  { token: null, errorMessage: '' }
);
