import createDataContext from './createDataContext'


const locationReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const recording = dispatch => () => { }
const stopRecording = dispatch => () => { }
const addLocation = dispatch => () => { }







export const { Provider, Context } = createDataContext(
    locationReducer,
    { recording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
)