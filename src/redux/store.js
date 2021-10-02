import { configureStore } from '@reduxjs/toolkit'
// import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import { reduxBatch } from '@manaflair/redux-batch'

import rootReducer from './root-reducer'
// import { fetchCollectionsStart } from './shop/shop.sagas'
import rootSaga from './root-saga'
import cartActionTypes from './cart/cart.types'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, logger]

// export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [reduxBatch],
  })

sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
