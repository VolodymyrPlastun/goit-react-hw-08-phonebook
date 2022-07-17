import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import contactsReducer from './contacts/contactsReducer';
import authReducer from './auth/authSlice';
import {  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  persistStore,
persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    },
    // logger,
  })]

  const authPersistConfig = {
    key: 'auth',
   storage,
    whitelist: ['token'],
  }
  

export const store = configureStore({
    reducer: {
      // auth: authReducer,
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',  
})


export const persistor = persistStore(store);