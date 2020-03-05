import { AsyncStorage } from "react-native"
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';





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
  console.log({ email, password });
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem("token", response.data.token)
    dispatch({ type: 'signup', payload: response.data.token })
  } catch (err) {
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
