// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import identifyStatusReducer from "./reducers/identifyPopUpSlice"

export const store = configureStore({
    reducer: {
        ideSt: identifyStatusReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
