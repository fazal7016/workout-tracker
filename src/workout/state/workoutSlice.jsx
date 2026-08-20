import {createSlice} from "@reduxjs/toolkit"

const workoutSlice = createSlice({
    name: "workout",
    initialState: {
        items: [],
    },
    reducers: {
        addWorkout: (state, action) => {
            const item = state.items.find((val) => {
            })
        }
    }
})