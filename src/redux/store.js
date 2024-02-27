import { combineReducers } from "redux";
import { authSlice } from ".";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
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
    // Add your custom middleware here if needed
];

// Custom serializableCheck function to ignore specific actions
const customSerializableCheck = (action) => {
    // Ignore specific actions like FLUSH, REHYDRATE, etc.
    const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];
    return ignoredActions.includes(action.type);
};

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: customSerializableCheck,
    }).concat(middlewares),
});

initStateWithPrevTab(store);

export default store;
export const Persistor = persistStore(store);
