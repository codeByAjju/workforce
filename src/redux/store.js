import { combineReducers } from "redux";
import { authSlice } from ".";
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createStateSyncMiddleware, initStateWithPrevTab } from "redux-state-sync";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";

const RootReducer = combineReducers({
    auth: authSlice,
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

const middlewares = [
    createStateSyncMiddleware({
        blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
    }),
];

const defaultMiddleware = getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
});



const store = configureStore({
    reducer:persistedReducer,
    middleware: () => [...defaultMiddleware, ...middlewares]
})

initStateWithPrevTab(store);


export default store;
export const Persistor = persistStore(store);