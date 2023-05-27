import { createStore } from "redux";
import {persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import saveREducer from "../reducer/saveReducer";
const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: [saveREducer]
}

const PersistedReducer = persistReducer(persistConfig, saveREducer);
const store = createStore(PersistedReducer);
const persistor = persistStore(store);

export {store, persistor}