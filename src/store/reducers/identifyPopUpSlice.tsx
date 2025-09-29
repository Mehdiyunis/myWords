import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    identifyPopUpStatus: false,
};

const identifyStatusSlice = createSlice({
    name: "identifyPopUpStatus",
    initialState,
    reducers: {
        identifyChangeStatus: (state) => {
            state.identifyPopUpStatus = !state.identifyPopUpStatus
            console.log(state.identifyPopUpStatus)
        }
    },
});

export const { identifyChangeStatus } = identifyStatusSlice.actions;
export default identifyStatusSlice.reducer;
