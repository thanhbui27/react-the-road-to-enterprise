import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../components/UsersManager/usersSlice'

export const store = configureStore({
    reducer : {
        user : userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type Appdispatch = typeof store.dispatch
