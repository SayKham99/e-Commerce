import {configureStore} from "@reduxjs/toolkit";
import {datesApi} from "./query/datesApi";
export const store = configureStore({
    reducer:{
        [datesApi.reducerPath]: datesApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(datesApi.middleware)
})