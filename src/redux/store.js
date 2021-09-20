import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
// import { fetchCollectionsStart } from './shop/shop.sagas'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
