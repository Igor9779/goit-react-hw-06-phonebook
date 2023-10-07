import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedContactsReducer } from "./slice";

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
    },
});

export const persister = persistStore(store)