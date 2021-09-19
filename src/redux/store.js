import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from './root-reducer'

import { fetchCollectionsAsync } from './shop/shop.sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsAsync)

export const persistor = persistStore(store)
