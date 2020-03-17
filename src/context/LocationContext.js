import createDataContext from './createDataContext'


const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_user_location":
            return { ...state, currentLocation: action.payload }
        case "start_recording":
            return { ...state, recording: true }
        case "stop_recording":
            return { ...state, recording: false }
        case "record_location":
            // return new array without mutation original one
            return { ...state, locations: [...state.locations, action.payload] };
        case "change_name":
            return { ...state, name: action.payload }
        default:
            return state
    }
}

const startRecording = dispatch => () => {
    dispatch({ type: "start_recording" })
}
const stopRecording = dispatch => () => {
    dispatch({ type: "stop_recording" })
}
const changeName = dispatch => (name) => {
    console.log("name changed", name)
    dispatch({ type: "change_name", payload: name })
}
const addLocation = dispatch => (location, recording) => {
    dispatch({ type: "add_user_location", payload: location })
    if (recording) {
        dispatch({ type: 'record_location', payload: location })
    }

}







export const { Provider, Context } = createDataContext(
    // {Reducer, action functions , default state}
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null, name: "" }
)
