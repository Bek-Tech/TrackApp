import createDataContext from './createDataContext'


const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_user_location":
            return { ...state, currentLocation: action.payload }
        default:
            return state
    }
}

const recording = dispatch => () => { }
const stopRecording = dispatch => () => { }
const addLocation = dispatch => (location) => {

    dispatch({ type: "add_user_location", payload: location })

}







export const { Provider, Context } = createDataContext(
    locationReducer,
    { recording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
)