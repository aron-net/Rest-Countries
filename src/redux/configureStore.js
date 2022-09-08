import { configureStore, } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { countryReducer } from "./Country/Country";

const store = configureStore({
    reducer: {
        country: countryReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;